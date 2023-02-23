const { StatusCodes } = require('http-status-codes/build/cjs/status-codes')
const authDocument = require('../db/model.js')

const getReq = async (req,res) => {
    res.status(200).send("Hello")
}

const getUsers = async (req,res) => {
    const users = await authDocument.find({})
    res.status(StatusCodes.OK).send(users)
}

module.exports = {getReq,getUsers}