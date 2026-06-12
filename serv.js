const WebSocket = require('ws');
const wss = new WebSocket.Server( process.env.PORT || 3000 );

wss.on('connection', (ws) => {
   console.log('New client connected');
   // Sending a message to the client
   ws.send('Welcome to the WebSocket server!');
   // Listening
)}
