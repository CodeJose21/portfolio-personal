import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { socialProfiles } from '../content/profile';
import { translations } from '../content/translations';
import { useAppSelector } from '../store';

export function ContactDetails() {
  const locale = useAppSelector(state => state.ui.locale);
  const t = translations[locale];
  return <div className="contact-details">
    <a href="mailto:josegonzb@gmail.com"><Mail size={15}/>josegonzb@gmail.com</a>
    <a href="tel:+34640161643"><Phone size={15}/>+34 640 16 16 43</a>
    <div className="social-profiles">{socialProfiles.map(profile => {
      const Icon = profile.name === 'LinkedIn' ? Linkedin : Github;
      return profile.url
        ? <a key={profile.name} href={profile.url} target="_blank" rel="noopener noreferrer"><Icon size={17}/>{profile.name}</a>
        : <span key={profile.name} className="profile-pending"><Icon size={17}/>{profile.name}<small>{t.profilePending}</small></span>;
    })}</div>
  </div>;
}
