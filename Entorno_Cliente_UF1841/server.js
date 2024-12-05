const express = require("express");
const path = require("path");
const app = express();

//Acceda o arquivo estatico
app.use(express.static(path.join(__dirname, "static")));

//start server
app.listen(3000, function(){
    console.log("server running");
});

