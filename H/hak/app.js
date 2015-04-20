
var Relayr = require("relayr");

var app_id = "ecb97e95-8408-4c31-951e-106d25d7c945";
var token =  "NrjB1z3f5Wh7anDP48-iFXFyBdAhWPqZ";
var snd =  "c1074df8-80dc-4e8f-beb2-a9cf80c49c0c";

var relayr = new Relayr(app_id);

relayr.connect(token, snd);

function respond(err, data) {
    console.log(err || data);
}
function blink() {
    console.log("BLINK");
    relayr.command(token, snd, {path:"led", command:"cmd", value:1}, respond);
    setTimeout(function () {
        relayr.command(token, snd, {path:"led", command:"cmd", value:0}, respond)
    }, 1000);
}

relayr.on('connect', function () {
    console.log("connected")
});

relayr.on('data', function (topic, msg) {
    console.log(topic + ":" + msg);
});



