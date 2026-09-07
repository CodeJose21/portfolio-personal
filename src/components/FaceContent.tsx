import { Camera, Sparkles } from 'lucide-react';
import { cubeCopy, type FaceId } from '../content/cube';
import { translations } from '../content/translations';
import { publicAsset } from '../content/assets';
import { personalPhoto } from '../content/profile';
import { experience, projects } from '../content/work';
import { useAppSelector } from '../store';
import { ContactDetails } from './ContactDetails';
import { Education } from './Education';
import { WorkCard } from './WorkCard';
export function FaceContent({ id }: {
    id: FaceId;
}) {
    const locale = useAppSelector(state => state.ui.locale);
    const t = translations[locale];
    const c = cubeCopy[locale];
    switch (id) {
        case 'contact': return <div className="contact-face">
      <div className="identity"><div><p className="eyebrow">{t.hello}</p><h2>Jose González<br /><em>Blanco.</em></h2></div><img className="avatar" src={publicAsset('jose-gonzalez.jpg')} alt={t.portrait} width="120" height="150"/></div>
      <p className="occupation">{t.role}</p><p className="intro">{t.intro}</p><ContactDetails />
      <div className="languages"><p className="eyebrow">{t.languageHeading}</p>{t.languages.map((name, index) => <div className="language" key={name}><img src={publicAsset(`flags/${['es', 'gb', 'de'][index]}.png`)} alt="" width="26" height="26"/><strong>{name}</strong><span>{t.levels[index]}</span></div>)}</div>
    </div>;
        case 'projects': return <><h2>{c.projectsTitle}</h2>{projects.map((entry, index) => <WorkCard key={entry.id} entry={entry} index={index}/>)}<h3 className="toolbox-title">{c.toolbox}</h3><div className="toolbox">{t.skillGroups.map((group, index) => <div key={group}><h4>{group}</h4><p>{t.skillDescriptions[index]}</p><div className="tags">{t.skillTools[index].map(tool => <span key={tool}>{tool}</span>)}</div></div>)}</div></>;
        case 'experience': return <><h2>{c.experienceTitle}</h2>{experience.map((entry, index) => <WorkCard key={entry.id} entry={entry} index={index}/>)}</>;
        case 'education': return <Education />;
        case 'soft': return <><h2>{t.softTitle}</h2><div className="soft-list">{t.soft.map(([title, text], index) => <article key={title}><span className="list-number">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></>;
        case 'personal': return <><p className="eyebrow"><Sparkles size={14}/>{c.outside}</p><h2>{t.personalTitle}</h2><p className="intro">{t.personalText}</p><div className="tags">{t.personalTags.map(tag => <span key={tag}>{tag}</span>)}</div><figure className="personal-photo">{personalPhoto ? <img src={publicAsset(personalPhoto)} alt={t.personalPhoto} width="640" height="400" loading="lazy"/> : <div className="photo-placeholder"><Camera size={28} strokeWidth={1}/><span>{t.personalPhotoPending}</span></div>}<figcaption>{t.personalPhoto}</figcaption></figure></>;
    }
}
