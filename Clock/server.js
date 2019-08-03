const express = require("express");

const server = express();

server.use(express.static("./public"));

const port = 4000;
server.listen(port, () => console.log("Server Up And Running on 127.0.0.1:" + port));