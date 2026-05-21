//tcpServer.js
// Create a TCP server
const net = require("net");

// Create a TCP server
const server = net.createServer((socket) => {
    console.log("istemci baglandi");

    socket.on("data", (data) => {
        console.log("bilgi alindi:", data.toString());
    });

    socket.on("end", () => {
        console.log("TCP baglantisi bitti");
    });
});

server.listen(process.env.PORT || 8080, () => {
    console.log("TCP server sunda acik: 8080");
});
