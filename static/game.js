var socket = io();


socket.emit('new player');
var mouse = { x: 0, y: 0 };
var color = 4;

// ширина границ
let border = 1
    // цвет границ
let borderColor = 'rgba(0,0,0,.4)'
    // setInterval(function() {

// }, pixSize00 / 60);
var map
var gridSize, widthCanvas, heightCanvas
socket.on('state', async function(width, height, gridSize, map) {

    this.gridSize = gridSize
    widthCanvas = width
    heightCanvas = height
    this.map = map

    for (var i = 0; i < mapY / gridSize; i++)
        for (var j = 0; j < mapX / gridSize; j++)
            switch (this.map[i, j]) {

                case 0:
                    ctx.fillStyle = '#FFFFFF';

                    ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

                    break

                case 1:
                    ctx.fillStyle = '#C2C2C2';

                    ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

                    break
                case 2:
                    ctx.fillStyle = '#858585';

                    ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

                    break
                case 3:
                    ctx.fillStyle = '#474747';

                    ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

                    break
                case 4:
                    ctx.fillStyle = '#000000';

                    ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

                    break
                case 5:
                    ctx.fillStyle = '#94DF44';

                    ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

                    break
                case 6:
                    ctx.fillStyle = '#4BB34B';

                    ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

                    break
                case 7:
                    ctx.fillStyle = '#006600';

                    ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

                    break
                case 8:
                    ctx.fillStyle = '#FDCA5E';
                    ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

                    break
                case 9:
                    ctx.fillStyle = '#EA621F';

                    ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

                    break
                case 10:
                    ctx.fillStyle = '#F18E1C';

                    ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

                    break
                case 11:
                    ctx.fillStyle = '#FF6C6C';

                    ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

                    break
                case 12:
                    ctx.fillStyle = '#FF2121';

                    ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

                    break
                case 13:
                    ctx.fillStyle = '#D32121';

                    ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

                    break
                case 14:
                    ctx.fillStyle = '#CD3EE6';

                    ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

                    break
                case 15:
                    ctx.fillStyle = '#A329B8';

                    ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

                    break
                case 16:
                    ctx.fillStyle = '#A1F0FF';

                    ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

                    break
                case 17:
                    ctx.fillStyle = '#00C9FF';

                    ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);
                    break
                case 18:
                    ctx.fillStyle = '#0080FF';

                    ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

                    break

                case 19:
                    ctx.fillStyle = '#C1334B';

                    ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

                    break

                case 20:
                    ctx.fillStyle = '#E095A9';

                    ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

                    break
                case 21:
                    ctx.fillStyle = '#FFF2EC';

                    ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

                    break


            }

})



socket.on('edit', function(i, j, c) {


    switch (c) {


        case 0:
            ctx.fillStyle = '#FFFFFF';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break

        case 1:
            ctx.fillStyle = '#C2C2C2';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 2:
            ctx.fillStyle = '#858585';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 3:
            ctx.fillStyle = '#474747';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 4:
            ctx.fillStyle = '#000000';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 5:
            ctx.fillStyle = '#94DF44';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 6:
            ctx.fillStyle = '#4BB34B';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 7:
            ctx.fillStyle = '#006600';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 8:
            ctx.fillStyle = '#FDCA5E';
            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 9:
            ctx.fillStyle = '#EA621F';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 10:
            ctx.fillStyle = '#F18E1C';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 11:
            ctx.fillStyle = '#FF6C6C';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 12:
            ctx.fillStyle = '#FF2121';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 13:
            ctx.fillStyle = '#D32121';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 14:
            ctx.fillStyle = '#CD3EE6';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 15:
            ctx.fillStyle = '#A329B8';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 16:
            ctx.fillStyle = '#A1F0FF';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 17:
            ctx.fillStyle = '#00C9FF';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);
            break
        case 18:
            ctx.fillStyle = '#0080FF';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break

        case 19:
            ctx.fillStyle = '#C1334B';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break

        case 20:
            ctx.fillStyle = '#E095A9';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 21:
            ctx.fillStyle = '#FFF2EC';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break


    }




})




click = false;
document.getElementById("Iimg").onclick = function(e) {

    var rect = e.target.getBoundingClientRect();
    mouse.x = e.clientX - rect.left; //x position within the element.
    mouse.y = e.clientY - rect.top; //y position within the element.
    console.log("Left? : " + mouse.x + " ; Top? : " + mouse.y + ".");

    // socket.emit('ckick', mouse.x, mouse.y, color)
}


function Write() { document.getElementById("colors").style.visibility = "visible" }

function Hidden() { document.getElementById("colors").style.visibility = "hidden" }

function Colorwhite() { color = 0 }

function Colorwhite1() { color = 21 }

function Colorgrey1() { color = 1 }

function Colorgrey2() { color = 2 }

function Colorblack1() { color = 3 }

function Colorblack2() { color = 4 }

function Colorgreen1() { color = 5 }

function Colorgreen2() { color = 6 }

function Colorgreen3() { color = 7 }

function Coloryelow1() { color = 8 }

function Coloryelow2() { color = 9 }

function Coloryelow3() { color = 10 }

function Colorred1() { color = 11 }

function Colorred2() { color = 12 }

function Colorred3() { color = 13 }

function Colorred4() { color = 19 }

function Colorred5() { color = 20 }

function Colorviolet1() { color = 14 }

function Colorviolet2() { color = 15 }

function Colorblue1() { color = 16 }

function Colorblue2() { color = 17 }

function Colorblue3() { color = 18 }