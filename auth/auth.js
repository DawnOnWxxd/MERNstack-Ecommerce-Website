const { StatusCodes } = require('http-status-codes/build/cjs/status-codes')
const authenticationData = require('../db/model.js')
const jwt = require('jsonwebtoken')
const authDocument = require('../db/model.js')

const registerUser = async (req,res) => {
    try {
        const user = await authenticationData.create({...req.body})
        const token = await user.createJWT()
        console.log(`Created user: ${user} and token: ${token}}`)
        res.status(StatusCodes.CREATED).send({name: user.userName, token: token})
    } catch (error) {
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error)
    }
    
}

const loginUser = async (req,res) => {
    try {
        const {userEmail,password} = await req.body
        if(!userEmail || !password){
            return res.status(StatusCodes.BAD_REQUEST).send("Please provide email and password")
        }
        const user = await authenticationData.findOne({userEmail})
        if(!user){
            return res.status(StatusCodes.UNAUTHORIZED).send("Not Valid Credentials")
        }
        const passwordMatch = await user.comparePass(password)
        if(!passwordMatch){
            return res.status(StatusCodes.UNAUTHORIZED).send("Credentials do not match")
        }
        res.status(StatusCodes.ACCEPTED).send('Successfully Logged In')
    } catch (error) {
        
    }
}

module.exports = {registerUser,loginUser};