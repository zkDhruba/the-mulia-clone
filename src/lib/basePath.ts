export const BASE_PATH = '/the-mulia-clone';

/**
 * Formats a path with the project's base path for GitHub Pages.
 * Ensures paths like '/images/hero.jpg' become '/the-mulia-clone/images/hero.jpg'
 */
export function withBase(path: string): string {
  if (!path) return '';
  
  // If it's already an absolute URL or already has the base path, return as is
  if (path.startsWith('http') || path.startsWith('https') || path.startsWith(BASE_PATH)) {
    return path;
  }
  
  // Ensure we don't have double slashes
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${cleanPath}`;
}
