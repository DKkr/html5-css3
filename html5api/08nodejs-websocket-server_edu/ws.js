//Simple Server
const WebSocket = require('ws');
const wss = new WebSocket.Server({port: 40510});

wss.on('connection', function (ws) {
    ws.on('message', function (message) {
        console.log(`received: ${message}`);
    })

    setInterval(() => ws.send(`${new Date()}`), 10000);
});