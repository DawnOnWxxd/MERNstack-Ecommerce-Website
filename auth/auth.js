const { StatusCodes } = require('http-status-codes/build/cjs/status-codes')
const authDocument = require('../db/model.js')
const jwt = require('jsonwebtoken')

const registerUser = async (req,res) => {
    try {
        const user = await authDocument.create({...req.body})
        const token = await user.createJWT()
        res.status(StatusCodes.CREATED).send(token)
    } catch (error) {
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error)
    }
    
}

const loginUser = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {registerUser};