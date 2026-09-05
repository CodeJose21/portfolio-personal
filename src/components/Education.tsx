import { useRef, type KeyboardEvent } from 'react';
import { ArrowUpRight, GraduationCap } from 'lucide-react';
import { translations } from '../content/translations';
import { selectEducation, useAppDispatch, useAppSelector, type EducationId } from '../store';
import { SectionHeading } from './SectionHeading';

const ids: EducationId[] = ['university', 'erasmus', 'school', 'game-development'];

export function Education() {
  const { locale, education } = useAppSelector(state => state.ui);
  const dispatch = useAppDispatch();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const t = translations[locale];
  const item = t.education[education];

  function handleKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    // Roving focus implements the WAI-ARIA vertical tabs keyboard pattern.
    let next = index;
    if (event.key === 'ArrowDown') next = (index + 1) % ids.length;
    else if (event.key === 'ArrowUp') next = (index + ids.length - 1) % ids.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = ids.length - 1;
    else return;
    event.preventDefault();
    dispatch(selectEducation(ids[next]));
    buttons.current[next]?.focus();
  }

  return <section id="education" className="section education-section">
    <SectionHeading eyebrow={t.eduEyebrow} title={t.eduTitle}/>
    <div className="education-layout">
      <div className="education-tabs" role="tablist" aria-label={t.nav[2]} aria-orientation="vertical">
        {ids.map((id, index) => <button key={id} ref={node => { buttons.current[index] = node; }} id={`tab-${id}`} role="tab" aria-selected={education === id} aria-controls={`panel-${id}`} tabIndex={education === id ? 0 : -1} onClick={() => dispatch(selectEducation(id))} onKeyDown={event => handleKey(event, index)}><span className="tab-number">0{index + 1}</span><span>{t.eduTabs[index]}<small>{t.eduLabels[index]}</small></span><ArrowUpRight size={18}/></button>)}
      </div>
      <article className="education-panel" role="tabpanel" id={`panel-${education}`} aria-labelledby={`tab-${education}`} tabIndex={0}>
        <div className="education-panel-top"><span className="square-icon"><GraduationCap size={27}/></span><span className="date">{item.date}</span></div>
        <p className="institution">{item.institution}</p><h3>{item.title}</h3><p className="education-copy">{item.text}</p>
        <div className="education-bottom"><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="grade"><strong>{item.metric}</strong><small>{item.metricLabel}</small></div></div>
      </article>
    </div>
  </section>;
}
