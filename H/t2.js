/*
 * run with bunyan to et sensible logging:
 * node examples/simpleOutput.js | bunyan -o short
 */
var Relayr = require("relayr");

var app_id = "ecb97e95-8408-4c31-951e-106d25d7c945";
var token =  "NrjB1z3f5Wh7anDP48-iFXFyBdAhWPqZ";

var lcp =  "c1074df8-80dc-4e8f-beb2-a9cf80c49c0c";
relayr = new Relayr(app_id);


relayr.deviceModel(token, lcp, function (err, description) {
    console.log("-------------- Light, Color & Proximity ------------------");
    console.log(err||description);
    console.log("----------------------------------------------------------");
});


relayr.connect(token, lcp);

relayr.on('connect', function () {
});
relayr.on('data', function (topic, msg) {
    console.log("TOPIC:"+topic);
    console.log(msg);
});

