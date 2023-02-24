require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authSchema = new mongoose.Schema({
    userName : {
        type : String,
        trim : true,
        required : [true, "Username is required"],
    },

    userEmail : {
        type : String,
        trim : true,
        required : [true, "Email is required"],
        unique : [true, "Email must be unique"]
    },

    password : {
        type : String,
        required : true,
        min : [8,'Minimum Length is 8 Characters']
    }
})

authSchema.pre('save', async function(next){
    this.password = await bcrypt.hash(this.password,10)
    next()
})

authSchema.methods.createJWT = async function () {
    return jwt.sign({userId: this._id, userName: this.userName},process.env.JWT_SIGNATURE)
}

authSchema.methods.comparePass = async function(pass) {
    return await bcrypt.compare(pass,this.password)
}
const authDocument = mongoose.model('authenticationData', authSchema)

module.exports = authDocument;