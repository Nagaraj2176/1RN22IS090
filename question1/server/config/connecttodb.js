const mongoose = require('mongoose');

require('dotenv').config();

function connectToDatabase() 
{
    mongoose.connect(process.env.MONGODB_URL).then
    (() => {
        console.log("Connected to MongoDB successfully");
    }).catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
}

module.exports = connectToDatabase;