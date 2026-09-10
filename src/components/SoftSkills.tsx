import { useId, useState } from 'react';
import { Brain, Ear, Lightbulb, Speech, ShieldCheck, type LucideIcon } from 'lucide-react';
import type { PortfolioTranslation, SoftSkillIcon } from '../content/locales/types';

const skillIcons: Record<SoftSkillIcon, LucideIcon> = {
  listening: Ear,
  communication: Speech,
  creativity: Brain,
  resilience: ShieldCheck,
  idea: Lightbulb,
};

export function SoftSkills({ content }: { content: PortfolioTranslation['softSkills'] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const panelId = useId();
  return <>
    <h2>{content.title}</h2>
    <div className="soft-list"
      onMouseLeave={() => setActiveId(null)}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setActiveId(null);
      }}
      onKeyDown={event => {
        if (event.key === 'Escape') setActiveId(null);
      }}>
      <div className="soft-skill-menu" role="group" aria-label={content.title}>
      {content.items.map((skill, index) => {
        const Icon = skillIcons[skill.icon ?? 'idea'];
        return <button type="button" className="soft-skill-icon" key={skill.id}
          id={`${panelId}-trigger-${skill.id}`}
          aria-label={skill.title}
          aria-expanded={activeId === skill.id}
          aria-controls={`${panelId}-${skill.id}`}
          onPointerEnter={event => {
            if (event.pointerType === 'mouse') setActiveId(skill.id);
          }}
          onFocus={event => {
            if (event.currentTarget.matches(':focus-visible')) setActiveId(skill.id);
          }}
          onClick={event => {
            if (event.detail === 0 || !window.matchMedia('(hover: hover)').matches) {
              setActiveId(current => current === skill.id ? null : skill.id);
            } else setActiveId(skill.id);
          }}>
          <Icon size={28} strokeWidth={1.5} aria-hidden="true"/>
          <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        </button>;
      })}
      </div>
      {content.items.map(skill => (
          <div className="soft-skill-panel" key={skill.id}
            id={`${panelId}-${skill.id}`} role="region"
            aria-labelledby={`${panelId}-trigger-${skill.id}`}
            hidden={activeId !== skill.id}>
            <h3 className="soft-skill-title">{skill.title}</h3>
            {skill.evidence && <span className="skill-evidence">{skill.evidence}</span>}
            <p>{skill.description}</p>
            {skill.application && <div className="skill-application">
              <span>{content.applicationLabel}</span>
              <p>{skill.application}</p>
            </div>}
            {skill.tags && <div className="tags skill-tags">
              {skill.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>}
          </div>
      ))}
    </div>
  </>;
}
