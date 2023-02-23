const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authSchema = new mongoose.Schema({
    userName : {
        type : String,
        trim : true,
        required : true,
        unique : true,
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
    return jwt.sign({userId: this._id, userName: this.userName},'jwtsecret')
}

const authDocument = mongoose.model('authDocument', authSchema)

module.exports = authDocument;