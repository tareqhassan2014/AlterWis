const http = require('http');
const app = require('express')();
const { Server } = require('socket.io');
const AppError = require('./util/appError');
const socketServer = require('./socketServer');
const globalErrorHandler = require('./middleware/globalErrorHandler');
const keys = require('./config/keys');
const connectDatabase = require('./util/connectDatabase');

const server = http.createServer(app);

connectDatabase();

// connect socket server
socketServer(new Server(server));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.all('*', (req, res, next) =>
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
);

app.use(globalErrorHandler);

module.exports = server;
