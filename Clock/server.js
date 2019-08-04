const express = require("express");
const moment = require("moment-timezone");
const server = express();

// console.log(moment().tz("America/Los_Angeles").toString());
// console.log(moment().tz("Indonesia/Amdon").toString());

server.use(express.static("./public"));
server.use(express.json());
server.use(express.urlencoded({extended:    true}));

server.get("/getZones", function(req, res)
{
    let zones = moment.tz.names();
    zones = zones.filter((zone) =>
    {
        if(!zone.includes("Etc/"))
            return zone;
    })
    res.send(zones);
});

server.post("/getTime", (req, res) =>
{
    res.send(moment().tz(req.body.zone).toString());
})

const port = 4000;
server.listen(port, () => console.log("Server Up And Running on 127.0.0.1:" + port));