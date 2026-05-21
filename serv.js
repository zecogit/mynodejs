//tcpServer.js
// Create a TCP server
const net = require("net");

// Create a TCP server
const server = net.createServer((socket) => {
    console.log("Client connected");

    socket.on("data", (data) => {
        console.log("Data received via TCP Client:", data.toString());
    });

    socket.on("end", () => {
        console.log("TCP Connection ended");
    });
});

server.listen(8080, () => {
    console.log("TCP server open on 8080");
});
