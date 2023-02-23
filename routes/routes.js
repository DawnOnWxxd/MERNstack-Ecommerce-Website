const express = require('express')
const router = express.Router()
const {getReq,getUsers} = require('../controllers/controls.js')
const {registerUser} = require('../auth/auth.js')

router.route('/').get(getReq)
router.route('/all').get(getUsers)
router.route('/create').post(registerUser)

module.exports = router;