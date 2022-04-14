
const mysql = require("mysql2");
const express = require("express");

const app = express();
const urlencodedParser = express.urlencoded({extended: false});


const pool = mysql.createPool({
    host: '25.22.131.112',
    port: '3306',
    user: 'sergo',
    password: '12345',
    database: 'kursach'
});

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/views'));
// получение списка пользователей
app.get("/", function(req, res){
    pool.query("SELECT * FROM літак_адміністратор", function(err, data) {
        if(err) return console.log(err);
        res.render("index.hbs", {
            users: data
        });
    });
});


app.get("/create", urlencodedParser, function(req, res){
    pool.query("SELECT * FROM літак_адміністратор", function(err, data) {
        if(err) return console.log(err);
        res.render("create.hbs", {
            users: data
        });
    });
});
// возвращаем форму для добавления данных
app.get("/create/:value", urlencodedParser, function(req, res){
    const value = req.params.value;
    pool.query("SELECT * FROM літак_адміністратор WHERE Марка_літака=?",[value], function(err, data) {
        if(err) return console.log(err);
        res.render("create.hbs", {
            users: data
        });
    });
});
// получаем отправленные данные и добавляем их в БД

//buttton1
app.get("/button", function (req, res) {
    pool.query("SELECT * FROM літак_адміністратор", function(err, data) {
        if(err) return console.log(err);
        res.render("button.hbs", {
            users: data
        });
    });
});
app.get("/button?value=?&value2=?", urlencodedParser, function(req, res){
    const value = req.params.value;
    const value2 = req.params.value2;
    pool.query("SELECT * FROM літак_адміністратор WHERE Марка_літака=? Номер_літака=?",[value,value2], function(err, data) {
        if(err) return console.log(err);
        res.render("button.hbs", {
            users: data
        });
    });
});


app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});