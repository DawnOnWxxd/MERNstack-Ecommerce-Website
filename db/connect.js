const mongoose = require('mongoose')

const connectDB = (URI) => {
    mongoose
    .set('strictQuery',true)
    .connect(URI)
}

module.exports = connectDB;