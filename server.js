const express = require('express')
const server = express()
const router = require('./routes/routes.js')
const connectDB = require('./db/connect.js')

require('dotenv').config()

server.use(express.urlencoded({extended:false}))
server.use(express.json())
server.use('/',router)

const port = process.env.PORT || 3000
const startServer = async () => {
    await connectDB(process.env.MONGO_URI)
    server.listen(port, console.log(`Connection with DB is establisehd || Server is listening on port ${port}`))
}

startServer()
