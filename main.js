const screenshot = require('screenshot-desktop')
const { v4: uuidv4 } = require('uuid');
var socket = require('socket.io-client')('http://192.168.1.122:5000');
// var axios = require("axios");


// var uuid = uuidv4();

let interval = setInterval(async () => {
    screenshot({ format: 'png' }).then(async (img) => {
        var imgStr = Buffer.from(img).toString('base64');

        socket.emit("screen-data", JSON.stringify({img: imgStr}));
        console.log(img);

    }).catch((err) => {
        console.log(err);
    });
}, 1000 / 10);
