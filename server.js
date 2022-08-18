require('dotenv').config();
const server = require('./app');
const keys = require('./config/keys');

// uncaught error handler
process.on('uncaughtException', (err) => {
    console.log('Uncaught Exception...');
    console.log(err.name, err.message);
    console.log(err.stack);
    console.log('Closing server...');
    console.log('Server closed...');
    process.exit(1);
});

const port = keys.PORT;

const expressServer = server.listen(port, () => {
    console.log(
        `Server started at ${new Date().toLocaleString()} on http://localhost:${port}/`
    );
});

// unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION 💥', err.mane, err.message);
    expressServer.close(() => {
        process.exit(1);
    });
});
