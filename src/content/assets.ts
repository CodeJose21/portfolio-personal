// Public assets must use Vite's base path when deployed under a repository URL.
export function publicAsset(path: string): string {
  if (/^(https?:)?\/\//i.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}
