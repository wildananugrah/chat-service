import { startTyping, stopTyping, sendMessage, deleteMessage, online, offline, refreshRoom } from './controllers/message.controller.js';
import { appPort, corsOrigin } from './configs/common.config.js';

import { createServer } from 'http';
import { Server } from 'socket.io';

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ['GET', 'POST'],
        credentials: true
    },
    allowEIO3: true
});

// TODO store all room

io.on('connection', async socket => {
    try {
        socket.on('join', async room => {
            socket.join(room);
            console.log(`someone has been joined: ${room}`);
        });

        socket.on('leave', async room => {
            socket.leave(room);
        });

        socket.on('refresh_room', async data => {
            refreshRoom(io, data);
        });

        socket.on('online', async data => {
            online(io, data);
        });

        socket.on('offline', async data => {
            offline(io, data);
        });

        socket.on('start_typing', async data => {
            startTyping(io, data);
        });

        socket.on('stop_typing', async data => {
            stopTyping(io, data);
        });

        socket.on('send_message', async data => {
            sendMessage(io, socket, data);
        });

        socket.on('delete_message', async data => {
            deleteMessage(io, socket, data);
        });
    } catch (err) {
        socket.emit('error', err);
    }
});

httpServer.listen(appPort);
console.log(`Websocket server started on port ${appPort}`);