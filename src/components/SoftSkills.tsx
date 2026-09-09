import { ChevronDown, Ear, Gamepad2, Lightbulb, MessageCircle, ShieldCheck, type LucideIcon } from 'lucide-react';
import type { PortfolioTranslation, SoftSkillIcon } from '../content/locales/types';

const skillIcons: Record<SoftSkillIcon, LucideIcon> = {
  listening: Ear,
  communication: MessageCircle,
  gamepad: Gamepad2,
  resilience: ShieldCheck,
  idea: Lightbulb,
};

export function SoftSkills({ content }: { content: PortfolioTranslation['softSkills'] }) {
  return <>
    <h2>{content.title}</h2>
    <div className="soft-list">
      {content.items.map((skill, index) => {
        const Icon = skillIcons[skill.icon ?? 'idea'];

        // Native disclosure works with touch, Enter and Space, without hover or JavaScript state.
        return <details className="soft-skill" key={skill.id}>
          <summary className="soft-skill-summary">
            <span className="soft-skill-icon" aria-hidden="true">
              <Icon size={25} strokeWidth={1.5}/>
              <span>{String(index + 1).padStart(2, '0')}</span>
            </span>
            <span className="soft-skill-heading">
              <span className="soft-skill-title">{skill.title}</span>
              {skill.evidence && <span className="skill-evidence">{skill.evidence}</span>}
            </span>
            <ChevronDown className="soft-skill-toggle" size={20} aria-hidden="true"/>
          </summary>
          <div className="soft-skill-panel">
            <p>{skill.description}</p>
            {skill.application && <div className="skill-application">
              <span>{content.applicationLabel}</span>
              <p>{skill.application}</p>
            </div>}
            {skill.tags && <div className="tags skill-tags">
              {skill.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>}
          </div>
        </details>;
      })}
    </div>
  </>;
}
