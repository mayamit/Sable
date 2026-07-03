// Join the configured base path (`/Sable` on GitHub Pages) with an internal
// path so links + assets resolve correctly. Use for ALL internal hrefs/srcs.
const base = import.meta.env.BASE_URL; // e.g. "/Sable/"

export function href(path = '/'): string {
  const b = base.endsWith('/') ? base.slice(0, -1) : base;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${b}${p}`.replace(/\/{2,}/g, '/');
}
