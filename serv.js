const http = require('http');

// Create a server that responds to incoming requests
const server = http.createServer((req, res) => {
  // Set the HTTP status code and content type
  res.statusCode = 200; // OK
  res.setHeader('Content-Type', 'text/plain');

  // Send a response to the client
  res.end('Hello, World!');
});

// Define the port and hostname
const hostname = '127.0.0.1';
const port = 3000;

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
