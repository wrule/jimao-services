import http from 'http';
import { app } from './app';

function main() {
  const server = http.createServer(app);
  server.listen(3000);
}

main()
