const mongoose = require('mongoose');
const dotenv = require('dotenv');
const asyncHandler = require("express-async-handler")

dotenv.config();

const connectDB = asyncHandler(async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('mongoDB connected');
    } catch (error) {
        console.log('mongoDB connection error:', error);
        process.exit(1);
    }
});
module.exports = connectDB;
