/** Next handles basePath for Link/router; browser APIs need it explicitly. */
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');
export const siteOrigin = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');
export function withBasePath(path: string) {
  return `${basePath}${path.startsWith('/') ? path : '/' + path}`;
}
export function absoluteSiteUrl(path: string) {
  return `${siteOrigin}${withBasePath(path)}`;
}
