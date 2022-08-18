const mongoose = require('mongoose');
const keys = require('../config/keys');
const catchAsync = require('../middleware/catchAsync');

const connectDatabase = catchAsync(async () => {
    const database = await mongoose.connect(keys.MONGO_URI);
    console.log(
        `MongoDB connected : ${
            database.connection.host
        } at ${new Date().toLocaleString()}`
    );
});

module.exports = connectDatabase;
