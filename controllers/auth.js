// const { connection, searchBase } = require('./controller')
const path = require('path')
const { session } = require("../app");
const { emit } = require('process');

const { controller } = require(
    "./DataBaseControlle"
)

module.exports.login = async function(req, res) {
    if (!req.body) return res.sendStatus(400);
    var user = req.body.user
    var password = req.body.password
    var sessionId = req.session.id
    if (!controller.login(user, password, sessionId)) {
        //код ошибки клиенту
        return
    } else {
        res.writeHead(301, {
            Location: `../../`
        }).end();
    }

}

module.exports.register = async function(req, res) {

    if (!req.body) return res.sendStatus(400);
    var user = req.body.user
    var password = req.body.password
    var sessionId = req.session.id
    if (!controller.register(user, password, sessionId)) {
        //код ошибки клиенту
        return
    }
    res.writeHead(301, {
        Location: `../../`
    }).end();

}


module.exports.exit = async function(req, res) {
    if (!req.body) return res.sendStatus(400);
    var ses = req.session.id
    if (!controller.SessionExit(ses)) {
        //код ошибки клиенту
        return
    }
    res.writeHead(301, {
        Location: `../../`
    }).end();


}