const { StatusCodes } = require('http-status-codes/build/cjs/status-codes')
const fs = require('fs')
const { isUtf8 } = require('buffer')

const  loginPage = fs.readFileSync('./public/login.html','utf-8')
const  registerPage = fs.readFileSync('./public/register.html','utf-8')


const getReq = async (req,res) => {
    res.status(200).send("Hello")
}

const getRegister = async (req,res) => {
    res.status(200).send(registerPage)
}

const getLogin = async (req,res) => {
    res.status(200).send(loginPage)
}

const getUsers = async (req,res) => {
    const users = await authDocument.find({})
    res.status(StatusCodes.OK).send(users)
}

module.exports = {getReq,getUsers,getRegister,getLogin}