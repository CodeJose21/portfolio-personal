import { ArrowUpRight, GraduationCap } from 'lucide-react';
import { translations } from '../content/translations';
import { selectEducation, useAppDispatch, useAppSelector } from '../store';
import { SectionHeading } from './SectionHeading';

export function Education() {
  const { locale, education } = useAppSelector(state => state.ui);
  const dispatch = useAppDispatch();
  const t = translations[locale].education;
  // If an entry was removed or is absent in this language, show the first stage.
  const item = t.items.find(entry => entry.id === education) ?? t.items[0];

  return <section className="section education-section">
    <SectionHeading eyebrow={t.eyebrow} title={t.title}/>
    <div className="education-layout">
      <div className="education-tabs" role="group" aria-label={t.navigationLabel}>
        {t.items.map((entry, index) => (
          <button
            type="button"
            key={entry.id}
            id={`education-button-${entry.id}`}
            aria-pressed={item.id === entry.id}
            aria-controls="education-panel"
            onClick={() => dispatch(selectEducation(entry.id))}
          >
            <span className="tab-number">{String(index + 1).padStart(2, '0')}</span>
            <span>{entry.button.title}<small>{entry.button.subtitle}</small></span>
            <ArrowUpRight size={15} aria-hidden="true"/>
          </button>
        ))}
      </div>
      <article className="education-panel" id="education-panel" aria-labelledby={`education-button-${item.id}`} tabIndex={0}>
        <div className="education-panel-top"><span className="square-icon"><GraduationCap size={27}/></span><span className="date">{item.date}</span></div>
        <p className="institution">{item.institution}</p><h3>{item.title}</h3><p className="education-copy">{item.description}</p>
        <div className="education-bottom"><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="grade"><strong>{item.metric}</strong><small>{item.metricLabel}</small></div></div>
      </article>
    </div>
  </section>;
}
