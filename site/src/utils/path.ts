// The page path as visitors see it: '/over' rather than '/over.html', and '/' for the homepage.
// (A build renders pages as /over.html and /index.html; the dev server uses /over.)
export function cleanPath(pathname: string): string {
  return pathname.replace(/(\/index)?(\.html)?\/?$/, '') || '/';
}
