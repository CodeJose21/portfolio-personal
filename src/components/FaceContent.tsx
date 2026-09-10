import { BriefcaseBusiness, Camera, Sparkles } from 'lucide-react';
import { cubeCopy, type FaceId } from '../content/cube';
import { translations } from '../content/translations';
import { publicAsset } from '../content/assets';
import { personalPhoto } from '../content/profile';
import { experience, projects } from '../content/work';
import { useAppSelector } from '../store';
import { ContactDetails } from './ContactDetails';
import { Education } from './Education';
import { WorkCard } from './WorkCard';
import { SoftSkills } from './SoftSkills';

export function FaceContent({ id }: { id: FaceId }) {
  const locale = useAppSelector(state => state.ui.locale);
  const t = translations[locale];
  const c = cubeCopy[locale];
  const publishedExperience = experience.filter(entry => entry.title[locale].trim() && entry.description[locale].trim());

  switch (id) {
    case 'contact':
      return <div className="contact-face">
        <div className="identity">
          <div><p className="eyebrow">{t.introduction.hello}</p><h2>Jose González<br/><em>Blanco.</em></h2></div>
          <img className="avatar" src={publicAsset('jose-gonzalez.jpg')} alt={t.introduction.portraitAlt} width="120" height="150"/>
        </div>
        <p className="occupation">{t.introduction.role}</p>
        <p className="intro">{t.introduction.description}</p>
        <ContactDetails/>
        <div className="languages">
          <p className="eyebrow">{t.languages.heading}</p>
          {t.languages.items.map(language => (
            <div className="language" key={language.id}>
              <img src={publicAsset(language.flag)} alt="" width="26" height="26"/>
              <strong>{language.name}</strong><span>{language.level}</span>
            </div>
          ))}
        </div>
      </div>;
    case 'projects':
      return <>
        <h2>{c.projectsTitle}</h2>
        {projects.map((entry, index) => <WorkCard key={entry.id} entry={entry} index={index}/>)}
      </>;
    case 'experience':
      return <>
        <h2>{c.experienceTitle}</h2>
        {publishedExperience.length
          ? publishedExperience.map((entry, index) => <WorkCard key={entry.id} entry={entry} index={index}/>)
          : <div className="work-empty" role="status">
            <BriefcaseBusiness size={32} strokeWidth={1.5} aria-hidden="true"/>
            <h3>{t.work.emptyExperience.title}</h3>
            <p>{t.work.emptyExperience.description}</p>
          </div>}
      </>;
    case 'education':
      return <Education/>;
    case 'soft':
      return <SoftSkills content={t.softSkills}/>;
    case 'personal':
      return <>
        <p className="eyebrow"><Sparkles size={14}/>{c.outside}</p>
        <h2>{t.personal.title}</h2><p className="intro">{t.personal.description}</p>
        <div className="tags">{t.personal.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <figure className="personal-photo">
          {personalPhoto
            ? <img src={publicAsset(personalPhoto)} alt={t.personal.photoCaption} width="478" height="478" loading="lazy" decoding="async"/>
            : <div className="photo-placeholder"><Camera size={28} strokeWidth={1}/><span>{t.personal.photoPlaceholder}</span></div>}
          <figcaption>{t.personal.photoCaption}</figcaption>
        </figure>
      </>;
  }
}
