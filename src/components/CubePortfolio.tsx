import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { cubeCopy, faceIds, faces, type FaceId } from '../content/cube';
import { selectFace, useAppDispatch, useAppSelector } from '../store';
import { DiePips } from './DiePips';
import { FaceContent } from './FaceContent';
export function CubePortfolio() {
    const { locale, face } = useAppSelector(state => state.ui);
    const dispatch = useAppDispatch();
    const copy = cubeCopy[locale];
    const [turning, setTurning] = useState(false);
    const [announced, setAnnounced] = useState<FaceId>(face);
    const panels = useRef<Partial<Record<FaceId, HTMLDivElement | null>>>({});
    const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    const lock = useRef(false);
    const cube = useRef<HTMLDivElement>(null);
    const languageThrow = useRef<Animation | null>(null);
    const previousLocale = useRef(locale);
    const index = faceIds.indexOf(face);
    useEffect(() => () => {
        clearTimeout(timer.current);
        languageThrow.current?.cancel();
    }, []);
    useEffect(() => {
        if (previousLocale.current === locale || !cube.current) return;
        previousLocale.current = locale;
        clearTimeout(timer.current);
        languageThrow.current?.cancel();
        languageThrow.current = null;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            lock.current = false;
            setTurning(false);
            setAnnounced(face);
            return;
        }

        lock.current = true;
        setTurning(true);
        const { x, y } = faces[face];
        const depth = 'translateZ(calc(0px - var(--half)))';
        // Whole rotations land on the same face; Redux selection never changes.
        const animation = cube.current.animate([
            { transform: getComputedStyle(cube.current).transform, offset: 0 },
            { transform: `${depth} translateY(-55px) scale(.72) rotateX(${x + 150}deg) rotateY(${y + 260}deg) rotateZ(-14deg)`, offset: .35 },
            { transform: `${depth} translateY(-25px) scale(.84) rotateX(${x + 310}deg) rotateY(${y + 640}deg) rotateZ(8deg)`, offset: .72 },
            { transform: `${depth} translateY(7px) scale(.98) rotateX(${x + 360}deg) rotateY(${y + 720}deg) rotateZ(0deg)`, offset: .92 },
            { transform: `${depth} translateY(0px) scale(1) rotateX(${x + 360}deg) rotateY(${y + 720}deg) rotateZ(0deg)`, offset: 1 },
        ], { duration: 1250, easing: 'cubic-bezier(.33,0,.25,1)' });
        languageThrow.current = animation;
        animation.finished.then(() => {
            if (languageThrow.current !== animation) return;
            languageThrow.current = null;
            lock.current = false;
            setTurning(false);
            setAnnounced(face);
        }).catch(() => { /* A new language selection supersedes a running throw. */ });
    }, [locale, face]);
    function navigate(target: FaceId) {
        if (target === face || lock.current)
            return;
        lock.current = true;
        setTurning(true);
        dispatch(selectFace(target));
        // CSS finishes at 800 ms; a fallback also works if transitionend is not delivered.
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        timer.current = setTimeout(() => {
            lock.current = false;
            setTurning(false);
            setAnnounced(target);
            // Focus runs after React removes inert from the destination face.
            requestAnimationFrame(() => panels.current[target]?.focus({ preventScroll: true }));
        }, reducedMotion ? 0 : 850);
    }
    const angle = faces[face];
    // Only the stationary, flat surface is interactive. Browsers can miss pointer
    // hits on descendants of a rotated 3D face even when they look front-facing.
    function renderFace(id: FaceId, interactive: boolean) {
        return <section key={id} className={`cube-face face-${id} ${interactive ? 'face-interactive' : ''}`}
            style={interactive ? undefined : { transform: `${faces[id].surface} translateZ(var(--half))` }}
            aria-hidden={!interactive} inert={!interactive} aria-labelledby={`title-${id}`}>
            <header className="face-header"><span id={`title-${id}`}>{copy.labels[id]}</span><DiePips value={faces[id].pips}/></header>
            <div ref={node => { if (interactive) panels.current[id] = node; }} className="face-scroll" tabIndex={interactive ? 0 : -1} role="region" aria-label={copy.labels[id]}><FaceContent id={id}/></div>
            <div className="face-footnote" aria-hidden="true"><span>JG — {copy.positions[id]}</span><span>FULL STACK / ML</span></div>
        </section>;
    }
    return <main id="main" className="portfolio-layout">
    <aside className="explorer"><p className="eyebrow">{copy.subtitle}</p><h1>{copy.title}</h1><p className="explorer-note">{copy.hint}</p>
      <nav aria-label={copy.navigation} className="face-navigation">{faceIds.map(id => <button type="button" key={id} aria-current={face === id ? 'page' : undefined} aria-disabled={turning} onClick={() => navigate(id)}><DiePips value={faces[id].pips}/><span>{copy.labels[id]}<small>{copy.positions[id]}</small></span></button>)}</nav>
      <div className="die-map" role="group" aria-label={copy.navigation}>
        {faceIds.map(id => (
          <button type="button" key={id} className={`map-${id}`}
            aria-label={`${faces[id].pips}. ${copy.labels[id]}`}
            title={`${faces[id].pips}. ${copy.labels[id]}`}
            aria-pressed={id === face} aria-disabled={turning}
            onClick={() => navigate(id)}>
            <DiePips value={faces[id].pips}/>
          </button>
        ))}
      </div>
    </aside>
    <div className="cube-column"><div className="scene-caption"><span>{copy.turn}</span><span>{String(index + 1).padStart(2, '0')} / 06</span></div>
      <div className={`cube-scene ${turning ? 'is-turning' : ''}`} aria-busy={turning}><div ref={cube} className="cube" style={{ '--rx': `${angle.x}deg`, '--ry': `${angle.y}deg` } as CSSProperties}>
        {turning && faceIds.map(id => renderFace(id, false))}
      </div>{!turning && renderFace(face, true)}</div>
    </div><p className="sr-only" aria-live="polite">{copy.face}: {copy.labels[announced]}</p>
  </main>;
}
