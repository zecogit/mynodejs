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
const hostname = '216.151.17.91';
const port = process.env.PORT || 4000 ;

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
