const express = require('express')
const router = express.Router()
const {getUsers} = require('../controllers/controls.js')
const {registerUser} = require('../auth/auth.js')

router.route('/all').get(getUsers)
router.route('/register').post(registerUser)

module.exports = router;