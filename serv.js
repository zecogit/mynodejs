const http = require('http');

http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hello, World!\n');
}).listen(3000);
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
   console.log('New client connected');
   // Sending a message to the client
   ws.send('Welcome to the WebSocket server!');
   // Listening
)}
