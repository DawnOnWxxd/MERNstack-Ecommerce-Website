const express = require('express')
const router = express.Router()
const {getUsers,getRegister,getLogin} = require('../controllers/controls.js')
const {registerUser,loginUser} = require('../auth/auth.js')

router.route('/all').get(getUsers)
router.route('/register').get(getRegister).post(registerUser)
router.route('/login').get(getLogin).post(loginUser)

module.exports = router;