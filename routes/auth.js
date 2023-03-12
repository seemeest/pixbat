const express = require("express")
const controller = require('../controllers/auth')
const router = express.Router()

const urlencodedParser = express.urlencoded({ extended: false });
router.post('/login', urlencodedParser, controller.login)

router.post('/register', controller.register)

router.post('/exit', controller.exit)

module.exports = router