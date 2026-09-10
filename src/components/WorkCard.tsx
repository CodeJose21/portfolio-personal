import { Braces } from 'lucide-react';
import type { WorkEntry } from '../content/work';
import { cubeCopy } from '../content/cube';
import { translations } from '../content/translations';
import { useAppSelector } from '../store';

export function WorkCard({ entry, index }: { entry: WorkEntry; index: number }) {
  const locale = useAppSelector(state => state.ui.locale);
  const c = cubeCopy[locale];
  return <article className="work-card">
    <div className="work-card-heading">
      <span>{String(index + 1).padStart(2, '0')}</span>
      {entry.status
        ? <span className={`project-status status-${entry.status}`}>{translations[locale].projectStatuses[entry.status]}</span>
        : !entry.title[locale] && <small>{c.pending}</small>}
    </div>
    <h3>{entry.title[locale] || c.entryTitle}</h3>
    {(entry.startDate !== undefined || entry.endDate !== undefined) && <div className="work-dates">
      {(['startDate', 'endDate'] as const).map(field => <span key={field}>
        {field === 'endDate' && ' - '}
        {entry[field]
          ? <time dateTime={entry[field]}>{new Intl.DateTimeFormat(locale, {
              day: 'numeric', month: 'short', timeZone: 'UTC',
            }).format(new Date(entry[field]))}</time>
          : field === 'endDate' ? c.present : c.pending}
      </span>)}
    </div>}
    <p className={!entry.description[locale] ? 'placeholder-copy' : ''}>{entry.description[locale] || c.description}</p>
    <div className="technology-panel">
      <div className="technology-heading"><Braces size={21}/><span>{c.technologies}</span></div>
      <div className="technology-tags">
        {entry.technologies.length
          ? entry.technologies.map(tech => <span key={tech}>{tech}</span>)
          : <span className="empty-tech">+ {c.pending}</span>}
      </div>
    </div>
  </article>;
}
