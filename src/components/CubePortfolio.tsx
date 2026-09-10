import { useEffect, useRef, type CSSProperties, type KeyboardEvent, type MouseEvent } from 'react';
import { cubeCopy, faceIds, faces, type FaceId } from '../content/cube';
import { selectFace, setView, useAppDispatch, useAppSelector } from '../store';
import { useCubeMotion } from '../hooks/useCubeMotion';
import { DiePips } from './DiePips';
import { FaceContent } from './FaceContent';
import { translations } from '../content/translations';

const horizontalDragTargets: Record<FaceId, { left: FaceId; right: FaceId }> = {
  contact: { left: 'projects', right: 'soft' },
  projects: { left: 'personal', right: 'contact' },
  personal: { left: 'soft', right: 'projects' },
  soft: { left: 'contact', right: 'personal' },
  education: { left: 'projects', right: 'soft' },
  experience: { left: 'projects', right: 'soft' },
};

function targetFromArrow(face: FaceId, key: 'ArrowLeft' | 'ArrowRight' | 'ArrowUp' | 'ArrowDown'): FaceId {
  if (key === 'ArrowLeft') return horizontalDragTargets[face].left;
  if (key === 'ArrowRight') return horizontalDragTargets[face].right;
  return key === 'ArrowUp' ? 'education' : 'experience';
}

export function CubePortfolio() {
  const { locale, face, view } = useAppSelector(state => state.ui);
  const dispatch = useAppDispatch();
  const copy = cubeCopy[locale];
  const linear = view === 'linear';
  const cube = useRef<HTMLDivElement>(null);
  const panels = useRef<Partial<Record<FaceId, HTMLDivElement | null>>>({});
  const focusRequested = useRef(false);
  const moving = useCubeMotion(cube, face, locale, !linear);
  const angle = faces[face];

  useEffect(() => {
    if (!moving && focusRequested.current) {
      focusRequested.current = false;
      panels.current[face]?.focus({ preventScroll: !linear });
      if (linear) panels.current[face]?.scrollIntoView({ block: 'start' });
      else if (window.matchMedia('(max-width: 760px)').matches) {
        document.getElementById(face)?.scrollIntoView({ block: 'start' });
      }
    }
  }, [moving, face, linear]);

  function navigate(target: FaceId) {
    focusRequested.current = true;
    if (target === face && !moving) {
      focusRequested.current = false;
      panels.current[target]?.focus({ preventScroll: !linear });
      if (linear) panels.current[target]?.scrollIntoView({ block: 'start' });
      else if (window.matchMedia('(max-width: 760px)').matches) {
        document.getElementById(target)?.scrollIntoView({ block: 'start' });
      }
    }
    dispatch(selectFace(target));
  }

  function handleLink(event: MouseEvent<HTMLAnchorElement>, target: FaceId) {
    // Preserve native open-in-new-tab, copy-link and keyboard link behaviour.
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigate(target);
  }

  function handleCubeKey(event: KeyboardEvent<HTMLDivElement>) {
    if (linear || moving || !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
    event.preventDefault();
    navigate(targetFromArrow(face, event.key as 'ArrowLeft' | 'ArrowRight' | 'ArrowUp' | 'ArrowDown'));
  }

  return <main id="main" className={`portfolio-layout ${linear ? 'is-linear' : ''}`} tabIndex={-1}>
    <aside className="explorer">
      <p className="eyebrow">{copy.subtitle}</p>
      <h1>{copy.title}</h1>
      <p className="explorer-note">{copy.hint}</p>
      <div className="view-switch" role="group" aria-label={copy.viewLabel}>
        <button type="button" aria-pressed={!linear} onClick={() => dispatch(setView('cube'))}>{copy.cubeView}</button>
        <button type="button" aria-pressed={linear} onClick={() => dispatch(setView('linear'))}>{copy.linearView}</button>
      </div>
      {!linear && <div className="die-map" role="group" aria-label={copy.navigation}>
        {faceIds.map(id => <button type="button" key={id} className={`map-${id}`}
          aria-label={`${faces[id].pips}. ${copy.labels[id]}`} title={`${faces[id].pips}. ${copy.labels[id]}`}
          aria-pressed={id === face} onClick={() => navigate(id)}>
          <DiePips value={faces[id].pips}/>
        </button>)}
      </div>}
      <nav aria-label={copy.navigation} className={`face-navigation ${linear ? 'linear-index' : 'cube-index'}`}>
        {faceIds.map(id => <a key={id} href={`#${id}`} aria-current={face === id ? 'location' : undefined} onClick={event => handleLink(event, id)}>
          <DiePips value={faces[id].pips}/><span>{copy.labels[id]}</span>
        </a>)}
      </nav>
    </aside>
    <div className="cube-column">
      {!linear && <div className="scene-caption"><span>{copy.turn}</span><span>{copy.keyboardHint}</span><span>{faces[face].pips.toString().padStart(2, '0')} / 06</span></div>}
      <div className={linear ? 'linear-sections' : `cube-scene ${moving ? 'is-turning' : ''}`}
        aria-busy={moving} tabIndex={linear ? undefined : 0} aria-label={linear ? undefined : copy.keyboardHint}
        onKeyDown={handleCubeKey}>
        <div ref={cube} className="cube" hidden={linear} aria-hidden="true" inert
          style={{ '--rx': `${angle.x}deg`, '--ry': `${angle.y}deg` } as CSSProperties}>
          {moving && faceIds.map(id => <div key={id} className="cube-face" style={{ transform: `${faces[id].surface} translateZ(var(--half))` }}>
            <div className="cube-art"><DiePips value={faces[id].pips}/><span>{copy.labels[id]}</span></div>
          </div>)}
        </div>
        {/* Real content stays mounted in a flat surface; animation never owns controls. */}
        {faceIds.map(id => <section key={id} id={id}
          className={`cube-face face-${id} face-interactive ${linear ? 'linear-section' : ''}`}
          hidden={!linear && id !== face} inert={!linear && moving} aria-labelledby={`title-${id}`}>
          <header className="face-header"><span id={`title-${id}`}>{copy.labels[id]}</span><DiePips value={faces[id].pips}/></header>
          <div ref={node => { panels.current[id] = node; }} className="face-scroll" tabIndex={linear ? -1 : 0} role="region" aria-label={copy.labels[id]}>
            <FaceContent id={id}/>
          </div>
          <div className="face-footnote">Jose González - {translations[locale].introduction.role}</div>
        </section>)}
      </div>
    </div>
    <p className="sr-only" aria-live="polite" aria-atomic="true">{!moving ? `${copy.face}: ${copy.labels[face]}` : ''}</p>
  </main>;
}
