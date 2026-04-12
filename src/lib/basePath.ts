export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/the-mulia-clone' : '';

/**
 * Formats a path with the project's base path for GitHub Pages.
 * Ensures paths like '/images/hero.jpg' become '/the-mulia-clone/images/hero.jpg' in production.
 */
export function withBase(path: string): string {
  if (!path) return '';
  
  // If it's already an absolute URL return as is
  if (path.startsWith('http') || path.startsWith('https')) {
    return path;
  }

  // In development, BASE_PATH is empty, so we just ensure it starts with / if needed
  if (!BASE_PATH) {
    return path.startsWith('/') ? path : `/${path}`;
  }
  
  // If it already has the base path, return as is
  if (path.startsWith(BASE_PATH)) {
    return path;
  }
  
  // Ensure we don't have double slashes when joining
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${cleanPath}`;
}
