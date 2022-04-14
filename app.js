
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

// получение списка пользователей
app.get("/", function(req, res){
    pool.query("SELECT * FROM екіпаж_адміністратор", function(err, data) {
        if(err) return console.log(err);
        res.render("index.hbs", {
            users: data
        });
    });
});
// кнопка для запиту 1
app.get("/button", function(req, res){
    pool.query("SELECT * FROM екіпаж_адміністратор", function(err, data) {
        if(err) return console.log(err);
        res.render("index.hbs", {
            users: data
        });
    });
});

// возвращаем форму для добавления данных
app.get("/create", function(req, res){
    res.render("create.hbs");
});
// получаем отправленные данные и добавляем их в БД
app.post("/create", urlencodedParser, function (req, res) {

    if(!req.body) return res.sendStatus(400);
    const name = req.body.Номер_екіпажу;
    const age = req.body.Клас;
    pool.query("INSERT INTO users (name, age) VALUES (?,?)", [name, age], function(err, data) {
        if(err) return console.log(err);
        res.redirect("/");
    });
});

// получем id редактируемого пользователя, получаем его из бд и отправлям с формой редактирования
app.get("/edit/:id", function(req, res){
    const id = req.params.id;
    pool.query("SELECT * FROM екіпаж_адміністратор WHERE id=?", [id], function(err, data) {
        if(err) return console.log(err);
        res.render("edit.hbs", {
            user: data[0]
        });
    });
});
// получаем отредактированные данные и отправляем их в БД
app.post("/edit", urlencodedParser, function (req, res) {

    if(!req.body) return res.sendStatus(400);
    const name = req.body.name;
    const age = req.body.age;
    const id = req.body.id;

    pool.query("UPDATE users SET name=?, age=? WHERE id=?", [name, age, id], function(err, data) {
        if(err) return console.log(err);
        res.redirect("/");
    });
});

// получаем id удаляемого пользователя и удаляем его из бд
app.post("/delete/:id", function(req, res){

    const id = req.params.id;
    pool.query("DELETE FROM users WHERE id=?", [id], function(err, data) {
        if(err) return console.log(err);
        res.redirect("/");
    });
});

app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});