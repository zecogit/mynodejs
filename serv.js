const http = require('http');

// Create a server that responds to incoming requests
const server = http.createServer((req, res) => {
  // Set the HTTP status code and content type
  res.statusCode = 200; // OK
  res.setHeader('Content-Type', 'text/plain');

  // Send a response to the client
  res.end(3+7);
});

// Define the port and hostname
const port = process.env.PORT || 8080 ;

// Start the server
server.listen(port, () => {
  console.log(`Server is running`);
});
