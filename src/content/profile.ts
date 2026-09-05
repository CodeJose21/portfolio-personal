// Only use confirmed profile URLs; empty values render as pending, never as dead links.
export const socialProfiles: { name: 'LinkedIn' | 'GitHub'; url: string }[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jose-gonzález-blanco-950aa5227' },
  { name: 'GitHub', url: 'https://github.com/CodeJose21' },
];

// Set a local public asset path when the personal photo is supplied.
export const personalPhoto: string = '';
