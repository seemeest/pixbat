var socket = io();



socket.emit('login');

socket.on('background', function(data) {
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = `url(${data})`;
})