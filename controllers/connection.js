const path = require('path')
const { session, express } = require("../app");
const { emit } = require('process');

const { controller } = require(
    "./DataBaseControlle"
)

module.exports.connect = async function(req, res) {
    var ses = req.session.id
    if (!controller.authentication(ses)) res.sendFile(path.join(__dirname, 'login.html'));
    else res.sendFile(path.join(__dirname, "../index.html"));

    // res.sendFile(path.join(__dirname, '../public', 'index1.html'));

}