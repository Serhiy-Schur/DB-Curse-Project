
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

//запит 1
app.get("/create", urlencodedParser, function(req, res){
    pool.query("SELECT * FROM літак_адміністратор", function(err, data) {
        if(err) return console.log(err);
        res.render("create.hbs", {
            users: data
        });
    });
});

app.get("/create/:value", urlencodedParser, function(req, res){
    const value = req.params.value;
    pool.query("SELECT * FROM літак_адміністратор WHERE Марка_літака=?",[value], function(err, data) {
        if(err) return console.log(err);
        res.render("create.hbs", {
            users: data
        });

    });
});
//запит 2
app.get("/Ekipag_A", function (req, res) {
    pool.query("SELECT * FROM літак_адміністратор", function(err, data) {
        if(err) return console.log(err);
        res.render("Ekipag_A.hbs", {
            users: data
        });
    });
});
app.get("/Ekipag_A/:value/:value2", urlencodedParser, function(req, res){
    //SELECT Номер_екіпажу, Кількість_пілотів, Кількість_бортпровідників FROM kursach.екіпаж_адміністратор WHERE  Кількість_кухарів > ? AND Клас =?;

    const value = req.params['value'];
    console.log(value);
    const value2 = req.params['value2'];
    pool.query("SELECT * FROM екіпаж_адміністратор WHERE  Кількість_кухарів > ? AND Клас =?",[value,value2], function(err, data) {
        if(err) return console.log(err);
        res.render("Ekipag_A.hbs", {
            users: data
        });
    });
});
//запит 3
app.get("/create/:value/:value2", urlencodedParser, function(req, res){
    const value = req.params['value'];
    console.log(value);
    const value2 = req.params['value2'];
    pool.query("SELECT * FROM літак_адміністратор WHERE Марка_літака=? AND Номер_літака=?",[value,value2], function(err, data) {
        if(err) return console.log(err);
        res.render("create.hbs", {
            users: data
        });
    });
});


//////////////////////// Запити Аднімістратор

//Запит Літак
app.get("/Litak_A", function (req, res) {
    pool.query("SELECT * FROM літак_адміністратор", function(err, data) {
        if(err) return console.log(err);
        res.render("Litak_A.hbs", {
            users: data
        });
    });
});
app.get("/Litak_A/:value/:value2", urlencodedParser, function(req, res){
    //SELECT Тип_літака, Номер_літака, Модель_літака FROM kursach.літак_адміністратор WHERE Марка_літака =? AND Авіакомпанія_власник =?

    const value = req.params['value'];
    console.log(value);
    const value2 = req.params['value2'];
    pool.query("SELECT * FROM літак_адміністратор WHERE Марка_літака =? AND Авіакомпанія_власник =?",[value,value2], function(err, data) {
        if(err) return console.log(err);
        res.render("Litak_A.hbs", {
            users: data
        });
    });
});

app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});