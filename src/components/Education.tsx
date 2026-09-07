import { ArrowUpRight, GraduationCap } from 'lucide-react';
import { translations } from '../content/translations';
import { selectEducation, useAppDispatch, useAppSelector, type EducationId } from '../store';
import { SectionHeading } from './SectionHeading';

const ids: EducationId[] = ['university', 'erasmus', 'school', 'game-development'];

export function Education() {
  const { locale, education } = useAppSelector(state => state.ui);
  const dispatch = useAppDispatch();
  const t = translations[locale];
  const item = t.education[education];


  return <section id="education" className="section education-section">
    <SectionHeading eyebrow={t.eduEyebrow} title={t.eduTitle}/>
    <div className="education-layout">
      <div className="education-tabs" role="group" aria-label={t.nav[2]}>
        {ids.map((id, index) => (
          <button
            type="button"
            key={id}
            id={`education-button-${id}`}
            aria-pressed={education === id}
            aria-controls="education-panel"
            onClick={() => dispatch(selectEducation(id))}
          >
            <span className="tab-number">0{index + 1}</span>
            <span>{t.eduTabs[index]}<small>{t.eduLabels[index]}</small></span>
            <ArrowUpRight size={15} aria-hidden="true"/>
          </button>
        ))}
      </div>
      <article className="education-panel" id="education-panel" aria-labelledby={`education-button-${education}`} tabIndex={0}>
        <div className="education-panel-top"><span className="square-icon"><GraduationCap size={27}/></span><span className="date">{item.date}</span></div>
        <p className="institution">{item.institution}</p><h3>{item.title}</h3><p className="education-copy">{item.text}</p>
        <div className="education-bottom"><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="grade"><strong>{item.metric}</strong><small>{item.metricLabel}</small></div></div>
      </article>
    </div>
  </section>;
}
