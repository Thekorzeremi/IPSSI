import http from 'http';
import fs from 'fs';

const port = 4000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Error loading index.html');
    } else {
      res.end(data);
    }
  });
}
);

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
    console.log("Press Ctrl+C to stop the server");
});