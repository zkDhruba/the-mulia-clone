export const BASE_PATH = "";

export function withBase(path: string): string {
  if (!path) return "";

  // External URLs
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return path.startsWith("/") ? path : `/${path}`;
}
