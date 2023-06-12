import path from 'path';

export
function route(file_path: string) {
  let route = path.relative(path.join(process.cwd(), 'dist'), file_path).toLowerCase();
  route = path.join('/', route);
  if (route.endsWith('.js')) route = route.slice(0, route.length - 3);
  console.log('mount', route);
  return route;
}
