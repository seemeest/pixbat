const express = require('express');
const http = require('http');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const autthRouts = require('./routes/auth')
const { connection } = require("./controllers/DataBaseControlle")
const connectRouts = require("./routes/connection")


var cookieParser = require('cookie-parser')
var session = require('express-session')
const bodyParser = require("body-parser")
app.use(cookieParser())



const sessionMiddleware = session({
    "secret": "sahaLoh",
    "key": "_id",
    "cookie": {
        "expires": new Date(253402300000000),
        "path": "/",
        "httpOnly": true,
        "maxAge": null
    }
});

app.use(sessionMiddleware)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api/auth', autthRouts)
    // app.use('/', connectRouts)

app.use('/static', express.static(__dirname + '/static'));
var valueconnext = 1;
app.get('/', function(request, response) {
    valueconnext++;
    request.session.authenticated = true;
    console.log(valueconnext.toString(), request.session.id)
    const sql = `SELECT * from \`users\` WHERE session = \"${request.session.id}\"; `
    connection.query(sql, function(err, results) {
        if (err) {

            console.log(err)


        } else if (results[0] != undefined) {
            response.sendFile(path.join(__dirname, 'index.html'));
            return;
        } else {
            response.sendFile(path.join(__dirname, 'login.html'));
        }
    })


});

app.get('/register', function(request, response) {
    response.sendFile(path.join(__dirname, 'register.html'));

});

module.exports = { app, session }



var p = 0;

var width = 2600;
var height = 1600;
var gridSize = 10

var mapY = height / gridSize
var mapX = width / gridSize

var map = new Array(mapY)
for (var i = 0; i < map.length; i++) {
    map[i] = new Array(mapX)
}

for (var i = 0; i < mapY; i++)
    for (var j = 0; j < mapX; j++)
        map[i][j] = 0




var pizic = 0.5

var user = {}
const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);
io.use(wrap(sessionMiddleware));
io.use((socket, next) => {
    const session = socket.request.session;
    if (session && session.authenticated) {
        next();
    } else {
        next(new Error("unauthorized"));
    }
});


io.on("connection", (socket) => {


    console.log(socket.request.session.id);

    socket.on('login', function() {

        io.sockets.emit('background', canvas.toDataURL());
    })

    socket.on('new player', function() {
        sql = `SELECT * from \`users\` WHERE session = \"${socket.request.session.id}\"; `
        connection.query(sql, function(err, results) {
            if (err) {

                console.log(err)


            } else if (results[0] != undefined) {

                user[socket.id] = {
                    _id: socket.request.session.id,
                    command: 0,
                    id: results[0].id,
                    setPixels: results[0].setPixels,
                    command: results[0].command
                };
                return;
            } else {
                socket.request.destroy()
            }
        })


        io.sockets.emit('state', canvas.width, canvas.height, gridSize, map);
    });

    // user[socket.id].request.headers.cookie
    socket.on('ckick', function(i, j, c) {


        try {
            sql = `UPDATE \`users\` SET \`setPixels\`='${user[socket.id].setPixels}' WHERE id=${user[socket.id].id}`
            user[socket.id].setPixels++;
            connection.query(sql, function(err, results) {

            })
        } catch (err) {
            console.log(err)
            console.log(user[socket.id].id)
        }



        // console.log("ckick", socket.handshake.address)
        i = Math.floor(i / gridSize)
        j = Math.floor(j / gridSize)
        try {
            map[i][j] = c
        } catch (err) {
            console.log(err)
        }
        io.sockets.emit('edit', i, j, c);

    })

    socket.on("disconnect", function() {
        delete user[socket.id]
    })
});

// async function drawCanvas(i, j, c) {

//     switch (c) {


//         case 0:
//             ctx.fillStyle = '#FFFFFF';

//             ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

//             break

//         case 1:
//             ctx.fillStyle = '#C2C2C2';

//             ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

//             break
//         case 2:
//             ctx.fillStyle = '#858585';

//             ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

//             break
//         case 3:
//             ctx.fillStyle = '#474747';

//             ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

//             break
//         case 4:
//             ctx.fillStyle = '#000000';

//             ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

//             break
//         case 5:
//             ctx.fillStyle = '#94DF44';

//             ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

//             break
//         case 6:
//             ctx.fillStyle = '#4BB34B';

//             ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

//             break
//         case 7:
//             ctx.fillStyle = '#006600';

//             ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

//             break
//         case 8:
//             ctx.fillStyle = '#FDCA5E';
//             ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

//             break
//         case 9:
//             ctx.fillStyle = '#EA621F';

//             ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

//             break
//         case 10:
//             ctx.fillStyle = '#F18E1C';

//             ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

//             break
//         case 11:
//             ctx.fillStyle = '#FF6C6C';

//             ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

//             break
//         case 12:
//             ctx.fillStyle = '#FF2121';

//             ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

//             break
//         case 13:
//             ctx.fillStyle = '#D32121';

//             ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

//             break
//         case 14:
//             ctx.fillStyle = '#CD3EE6';

//             ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

//             break
//         case 15:
//             ctx.fillStyle = '#A329B8';

//             ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

//             break
//         case 16:
//             ctx.fillStyle = '#A1F0FF';

//             ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

//             break
//         case 17:
//             ctx.fillStyle = '#00C9FF';

//             ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);
//             break
//         case 18:
//             ctx.fillStyle = '#0080FF';

//             ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

//             break

//         case 19:
//             ctx.fillStyle = '#C1334B';

//             ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

//             break

//         case 20:
//             ctx.fillStyle = '#E095A9';

//             ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

//             break
//         case 21:
//             ctx.fillStyle = '#FFF2EC';

//             ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

//             break




//     }
// }


// async function drawBoard() {
//     for (var x = 0; x <= canvas.width; x += gridSize) {
//         ctx.moveTo(pizic + x + p, p);
//         ctx.lineTo(pizic + x + p, canvas.height + p);

//     }

//     for (var x = 0; x <= canvas.height; x += gridSize) {
//         ctx.moveTo(p, pizic + x + p);
//         ctx.lineTo(canvas.width + p, pizic + x + p);

//     }

//     ctx.lineWidth = 1;
//     ctx.strokeStyle = "#625C5C";
//     ctx.stroke();
//     // console.log(canvas.loadFromJSON(yourJSONString))
//     console.log(canvas.toBuffer())
// }
// // drawBoard();

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`server start ${PORT}`))