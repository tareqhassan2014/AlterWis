// socket server
// var io = require('socket.io').listen(server);
// io.sockets.on('connection', function (socket) {
//     socket
//         .on('join', function (data) {
//             socket.join(data.room);
//             socket.broadcast.to(data.room).emit('join', data);
//         })
//         .on('leave', function (data) {
//             socket.leave(data.room);
//             socket.broadcast.to(data.room).emit('leave', data);
//         })
//         .on('message', function (data) {
//             socket.broadcast.to(data.room).emit('message', data);
//         })
//         .on('disconnect', function () {
//             socket.broadcast.emit('leave', {
//                 user: socket.user,
//                 room: socket.room,
//             });
//         })
//         .on('error', function (err) {
//             console.log(err);
//         })
//         .on('connect_error', function (err) {
//             console.log(err);
//         })
//         .on('connect_timeout', function (err) {
//             console.log(err);
//         })
//         .on('reconnect_attempt', function (err) {
//             console.log(err);
//         })
//         .on('reconnect_error', function (err) {
//             console.log(err);
//         })
//         .on('reconnect_failed', function (err) {
//             console.log(err);
//         })
//         .on('ping', function (err) {
//             console.log(err);
//         })
//         .on('pong', function (err) {
//             console.log(err);
//         })
//         .on('connect', function (err) {
//             console.log(err);
//         })
//         .on('disconnect', function (err) {
//             console.log(err);
//         })
//         .on('reconnect', function (err) {
//             console.log(err);
//         })
//         .on('reconnect_attempt', function (err) {
//             console.log(err);
//         })
//         .on('reconnecting', function (err) {
//             console.log(err);
//         })
//         .on('reconnect_error', function (err) {
//             console.log(err);
//         })
//         .on('reconnect_failed', function (err) {
//             console.log(err);
//         })
//         .on('reconnect_attempt', function (err) {
//             console.log(err);
//         })
//         .on('reconnect_failed', function (err) {
//             console.log(err);
//         })
//         .on('reconnect_error', function (err) {
//             console.log(err);
//         })
//         .on('reconnect_failed', function (err) {
//             console.log(err);
//         })
//         .on('reconnect_error', function (err) {
//             console.log(err);
//         })
//         .on('reconnect_failed', function (err) {
//             console.log(err);
//         });
// });

const socketServer = (io) => {
    io.on('connection', (socket) => {
        console.log('a user connected');
    });
};

module.exports = socketServer;
