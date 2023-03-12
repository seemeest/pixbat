const express = require("express")
const controller = require('../controllers/connection')
const router = express.Router()

const urlencodedParser = express.urlencoded({ extended: false });


router.get('/', urlencodedParser, controller.connect)



module.exports = router