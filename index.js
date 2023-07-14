const express = require("express");
const app = express();

var input = document.getElementById("input")

app.get("/", function(req, res){
    res.send("Olá pessoal")
});

app.get("/arquivo", function(req, res){
    res.send("Aqui é o arquivo!")
});

app.listen(1010, function(){
    console.log("Ouvindo a porta 1010")
});

