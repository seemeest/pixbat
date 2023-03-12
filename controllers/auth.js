// const { connection, searchBase } = require('./DataBaseControlle')
const path = require('path')
const { session } = require("../app");
const { emit } = require('process');

const { dataBaseControlle } = require(
    "./DataBaseControlle"
)

module.exports.login = function(req, res) {
    if (!req.body) return res.sendStatus(400);
    var user = req.body.user
    var password = req.body.password
    var sessionId = req.session.id
    if (!dataBaseControlle.login(user, password, sessionId)) {
        //код ошибки клиенту
        return
    } else {
        res.writeHead(301, {
            Location: `../../`
        }).end();
    }

}

module.exports.register = function(req, res) {

    if (!req.body) return res.sendStatus(400);
    var user = req.body.user
    var password = req.body.password
    var sessionId = req.session.id
    if (!dataBaseControlle.register(user, password, sessionId)) {
        //код ошибки клиенту
        return
    }
    res.writeHead(301, {
        Location: `../../`
    }).end();

}


module.exports.exit = function(req, res) {
    if (!req.body) return res.sendStatus(400);
    var ses = req.session.id
    if (!dataBaseControlle.SessionExit(ses)) {
        //код ошибки клиенту
        return
    }
    res.writeHead(301, {
        Location: `../../`
    }).end();


}