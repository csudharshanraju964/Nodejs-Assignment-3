const fs = require('fs');
const http = require('http');
const port = 5000;


fs.writeFile('index.html', '<h1> Hello World </h1><p> This is Sudharshan Raju... </p>', (err) => {
  if (err) throw err;
  console.log('File created successfully!');
});


const server = http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
});


server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});