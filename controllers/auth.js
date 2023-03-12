// const { connection, searchBase } = require('./DataBaseControlle')
const path = require('path')
const mysql = require("mysql2");
const { session } = require("../app");
const { emit } = require('process');
var connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "PixelBattle",
    password: "",
    port: "3306"
});

module.exports.login = function(req, res) {


    if (!req.body) return res.sendStatus(400);
    // console.log(req.body);
    // var aut = searchBase(req.body.user, req.body.password)
    var user = req.body.user
    var password = req.body.password
    var sql = `SELECT * from \`users\` WHERE login = \"${user}\" and pasworld=\"${password}\"; `

    // UPDATE `users` SET `session`='37KP4SZdgKClPro0arsTd35_gZewCO71' WHERE id=0
    connection.query(sql, function(err, results) {
        if (err) {
            console.log(err);
            res.writeHead(301, {
                Location: `../../`
            }).end();
            return;

        } else {


            if (results[0] === undefined) {

                res.writeHead(301, {
                    Location: `../../`
                }).end();

                return;

            } else {

                sql = `UPDATE \`users\` SET \`session\`='${req.session.id}' WHERE id=${results[0].id}`
                res.writeHead(301, {
                    Location: `../../`
                }).end();
                connection.query(sql, function(err, results) {

                })

                return;
            }


        }

    });



}

module.exports.register = function(req, res) {

    console.log("register")
    if (!req.body) return res.sendStatus(400);
    // console.log(req.body);
    // var aut = searchBase(req.body.user, req.body.password)
    var user = req.body.user
    var password = req.body.password
        // if (password.length < 5) {
        //     res.writeHead(301, {
        //         Location: `../../`
        //     }).end();
        //     return
        // }
        // var sql = `SELECT * FROM \`users\` WHERE login="${user}";` 

    var sql = `INSERT INTO \`users\`( \`session\`, \`login\`, \`pasworld\` ) VALUES ('${req.session.id}','${user}','${password}')`
        // `INSERT INTO \`gorod\` ( \`name\`, \`area\`, \`pupulation\`) VALUES ('${name}','${area}','${pupulation}')`

    connection.query(sql, function(err, results) {
        if (err) console.log(err)
    })
    res.writeHead(301, {
        Location: `../../`
    }).end();

}

module.exports.exit = function(req, res) {
    var ses = req.session.id
    sql = `UPDATE \`users\` SET session='0' WHERE  session=0`

    connection.query(sql, function(err, results) {
        if (err) console.log(err)
        console.log("exit", results)
    })
    res.writeHead(301, {
        Location: `../../`
    }).end();


}