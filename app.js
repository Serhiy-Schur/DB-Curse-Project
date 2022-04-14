
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

// //запит 1
// app.get("/create", urlencodedParser, function(req, res){
//     pool.query("SELECT * FROM літак_адміністратор", function(err, data) {
//         if(err) return console.log(err);
//         res.render("create.hbs", {
//             users: data
//         });
//     });
// });
//
// app.get("/create/:value", urlencodedParser, function(req, res){
//     const value = req.params.value;
//     pool.query("SELECT * FROM літак_адміністратор WHERE Марка_літака=?",[value], function(err, data) {
//         if(err) return console.log(err);
//         res.render("create.hbs", {
//             users: data
//         });
//
//     });
// });
// //запит 2
//
// //запит 3
// app.get("/create/:value/:value2", urlencodedParser, function(req, res){
//     const value = req.params['value'];
//     console.log(value);
//     const value2 = req.params['value2'];
//     pool.query("SELECT * FROM літак_адміністратор WHERE Марка_літака=? AND Номер_літака=?",[value,value2], function(err, data) {
//         if(err) return console.log(err);
//         res.render("create.hbs", {
//             users: data
//         });
//     });
// });


//////////////////////// Запити Аднімістратор
//Запит Екіпаж
app.get("/Ekipag_A", function (req, res) {
    pool.query("SELECT * FROM екіпаж_адміністратор", function(err, data) {
        if(err) return console.log(err);
        res.render("Ekipag_A.hbs", {
            users: data
        });
    });
});
app.get("/Ekipag_A/:value/:value2", urlencodedParser, function(req, res){
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

//Запит Пасажир
app.get("/Pasazhyr_A", function (req, res) {
    pool.query("SELECT * FROM пасажир_адміністратор", function(err, data) {
        if(err) return console.log(err);
        res.render("Pasazhyr_A.hbs", {
            users: data
        });
    });
});
app.get("/Pasazhyr_A/:value/:value2", urlencodedParser, function(req, res){
    const value = req.params['value'];
    console.log(value);
    const value2 = req.params['value2'];
    pool.query("SELECT * FROM пасажир_адміністратор WHERE Стать =? AND Країна =?",[value,value2], function(err, data) {
        if(err) return console.log(err);
        res.render("Pasazhyr_A.hbs", {
            users: data
        });
    });
});

//Запит Білет
app.get("/Bilet_A", function (req, res) {
    pool.query("SELECT * FROM білет_адміністратор", function(err, data) {
        if(err) return console.log(err);
        res.render("Bilet_A.hbs", {
            users: data
        });
    });
});
app.get("/Bilet_A/:value/:value2", urlencodedParser, function(req, res){
    const value = req.params['value'];
    console.log(value);
    const value2 = req.params['value2'];
    pool.query("SELECT * FROM білет_адміністратор WHERE Дата_продажу =? AND Рейс =?",[value,value2], function(err, data) {
        if(err) return console.log(err);
        res.render("Bilet_A.hbs", {
            users: data
        });
    });
});

//Запит Авіакомпанія
app.get("/Aviakompaniya_A", function (req, res) {
    pool.query("SELECT * FROM авіакомпанія_адміністратор", function(err, data) {
        if(err) return console.log(err);
        res.render("Aviakompaniya_A.hbs", {
            users: data
        });
    });
});
app.get("/Aviakompaniya_A/:value/:value2", urlencodedParser, function(req, res){
    const value = req.params['value'];
    console.log(value);
    const value2 = req.params['value2'];
    pool.query("SELECT * FROM авіакомпанія_адміністратор WHERE Контактний_номер_телефону =? AND Назва_авіакомпанії =?",[value,value2], function(err, data) {
        if(err) return console.log(err);
        res.render("Aviakompaniya_A.hbs", {
            users: data
        });
    });
});

//Запит Рейс
app.get("/Rays_A", function (req, res) {
    pool.query("SELECT * FROM рейс_адміністратор", function(err, data) {
        if(err) return console.log(err);
        res.render("Rays_A.hbs", {
            users: data
        });
    });
});
app.get("/Rays_A/:value/:value2", urlencodedParser, function(req, res){
    const value = req.params['value'];
    console.log(value);
    const value2 = req.params['value2'];
    pool.query("SELECT * FROM рейс_адміністратор WHERE Час_в_шляху =? AND Дата_вильоту =?",[value,value2], function(err, data) {
        if(err) return console.log(err);
        res.render("Rays_A.hbs", {
            users: data
        });
    });
});

//Запит Аеропорт
app.get("/Aeroport_A", function (req, res) {
    pool.query("SELECT * FROM аеропорт_адміністратор", function(err, data) {
        if(err) return console.log(err);
        res.render("Aeroport_A.hbs", {
            users: data
        });
    });
});
app.get("/Aeroport_A/:value/:value2", urlencodedParser, function(req, res){
    const value = req.params['value'];
    console.log(value);
    const value2 = req.params['value2'];
    pool.query("SELECT * FROM аеропорт_адміністратор WHERE Країна_розташування =? AND Назва_аеропорту =?",[value,value2], function(err, data) {
        if(err) return console.log(err);
        res.render("Aeroport_A.hbs", {
            users: data
        });
    });
});

//Запит Маршрут
app.get("/Marshrut_A", function (req, res) {
    pool.query("SELECT * FROM маршрут_адміністратор", function(err, data) {
        if(err) return console.log(err);
        res.render("Marshrut_A.hbs", {
            users: data
        });
    });
});
app.get("/Marshrut_A/:value/:value2", urlencodedParser, function(req, res){
    const value = req.params['value'];
    console.log(value);
    const value2 = req.params['value2'];
    pool.query("SELECT * FROM маршрут_адміністратор WHERE Довжина <? AND Країна_прибуття =?",[value,value2], function(err, data) {
        if(err) return console.log(err);
        res.render("Marshrut_A.hbs", {
            users: data
        });
    });
});

app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});
//