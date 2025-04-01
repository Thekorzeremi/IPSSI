import http from 'http';
import fs from 'fs';

const port = 4000;

const server = http.createServer((req, res) => {
    if(req.url = "/" && req.method == "GET") {
      const htmlContent = fs.readFileSync('index.html', 'utf-8');
      res.end(htmlContent);
    } else {
      res.end('404 Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
    console.log("Press Ctrl+C to stop the server");
});