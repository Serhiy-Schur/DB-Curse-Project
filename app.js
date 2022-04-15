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
///Головна Сторінка
app.get("/", function(req, res){
    pool.query("SELECT * FROM літак_адміністратор", function(err, data) {
        if(err) return console.log(err);
        res.render("index.hbs", {
            users: data
        });
    });
});
///Сторінка Адміністратора
app.get("/Admin", function(req, res){
    pool.query("SELECT * FROM літак_адміністратор", function(err, data) {
        if(err) return console.log(err);
        res.render("Admin_Page.hbs", {
            users: data
        });
    });
});

///Сторінка Пасажира
app.get("/Pasazhyr", function(req, res){
    pool.query("SELECT * FROM літак_адміністратор", function(err, data) {
        if(err) return console.log(err);
        res.render("Pasazhyr_Page.hbs", {
            users: data
        });
    });
});

app.get("/create", function(req, res){
    res.render("create.hbs");
});
// получаем отправленные данные и добавляем их в БД
app.post("/create", urlencodedParser, function (req, res) {

    if(!req.body) return res.sendStatus(400);
    const table = req.body.age;
    const name = req.body.name;
    const age = req.body.age;

    pool.query("INSERT INTO users (name, age) VALUES (?,?)", [name, age], function(err, data) {
        if(err) return console.log(err);
        res.redirect("/");
    });
});
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
////////Анна
//Запит рейс
//SELECT* FROM рейс_пасажир WHERE Дата_прибуття = ? AND Країна_прибуття =?;
app.get("/Rays_P", function (req, res) {
    pool.query("SELECT * FROM рейс_пасажир", function(err, data) {
        if(err) return console.log(err);
        res.render("Rays_P.hbs", {
            users: data
        });
    });
});
app.get("/Rays_P/:value/:value2", urlencodedParser, function(req, res){
    const value = req.params['value'];
    console.log(value);
    const value2 = req.params['value2'];
    pool.query("SELECT * FROM рейс_пасажир WHERE Дата_прибуття = ? AND Країна_прибуття =?",[value,value2], function(err, data) {
        if(err) return console.log(err);
        res.render("Rays_P.hbs", {
            users: data
        });
    });
});

//Запит літак
app.get("/Litak_P", function (req, res) {
    pool.query("SELECT * FROM літак_пасажир", function(err, data) {
        if(err) return console.log(err);
        res.render("Litak_P.hbs", {
            users: data
        });
    });
});
app.get("/Litak_P/:value/:value2", urlencodedParser, function(req, res){
    const value = req.params['value'];
    console.log(value);
    const value2 = req.params['value2'];
    pool.query("SELECT * FROM літак_пасажир WHERE Дата_випуску =? AND Марка =?",[value,value2], function(err, data) {
        if(err) return console.log(err);
        res.render("Litak_P.hbs", {
            users: data
        });
    });
});

//Запит квиток
app.get("/Kvutok_P", function (req, res) {
    pool.query("SELECT * FROM квиток_пасажир", function(err, data) {
        if(err) return console.log(err);
        res.render("Kvutok_P.hbs", {
            users: data
        });
    });
});
app.get("/Kvutok_P/:value/:value2", urlencodedParser, function(req, res){
    const value = req.params['value'];
    console.log(value);
    const value2 = req.params['value2'];
    pool.query("SELECT  * FROM квиток_пасажир WHERE Ціна < AND Дата_продажу <?",[value,value2], function(err, data) {
        if(err) return console.log(err);
        res.render("Kvutok_P.hbs", {
            users: data
        });
    });
});

//екіпаж
app.get("/Ekipag_P", function (req, res) {
    pool.query("SELECT * FROM екіпаж_пасажир", function(err, data) {
        if(err) return console.log(err);
        res.render("Ekipag_P.hbs", {
            users: data
        });
    });
});
app.get("/Ekipag_P/:value/:value2", urlencodedParser, function(req, res){
    const value = req.params['value'];
    console.log(value);
    const value2 = req.params['value2'];
    pool.query("SELECT  * FROM екіпаж_пасажир WHERE Кількість_вильтів =? AND Стаж =?",[value,value2], function(err, data) {
        if(err) return console.log(err);
        res.render("Ekipag_P.hbs", {
            users: data
        });
    });
});
// аеропорт
app.get("/Aeroport_P", function (req, res) {
    pool.query("SELECT  * FROM аеропорт_пасажир", function(err, data) {
        if(err) return console.log(err);
        res.render("Aeroport_P.hbs", {
            users: data
        });
    });
});
app.get("/Aeroport_P/:value/:value2", urlencodedParser, function(req, res){
    const value = req.params['value'];
    console.log(value);
    const value2 = req.params['value2'];
    pool.query("SELECT  * FROM аеропорт_пасажир WHERE Кількість_літаків >? AND Кількість_персоналу <?",[value,value2], function(err, data) {
        if(err) return console.log(err);
        res.render("Aeroport_P.hbs", {
            users: data
        });
    });
});
//SELECT  * FROM тарифи_на_перевезення_тварин_пасажир WHERE Ціна =? AND Габарити(в*ш*г) =?
app.get("/Taryf_Tvaryna_P", function (req, res) {
    pool.query("SELECT  * FROM тарифи_на_перевезення_тварин_пасажир", function(err, data) {
        if(err) return console.log(err);
        res.render("Taryf_Tvaryna_P.hbs", {
            users: data
        });
    });
});
app.get("/Taryf_Tvaryna_P/:value/:value2", urlencodedParser, function(req, res){
    const value = req.params['value'];
    console.log(value);
    const value2 = req.params['value2'];
    pool.query("SELECT  * FROM тарифи_на_перевезення_тварин_пасажир WHERE Ціна =? AND Габарити =?",[value,value2], function(err, data) {
        if(err) return console.log(err);
        res.render("Taryf_Tvaryna_P.hbs", {
            users: data
        });
    });
});
//SELECT  * FROM тарифи_для_пасажирів_пасажир WHERE Посадковий_талоном =? AND Ціна =?
app.get("/Taryf_Pasazhyr_P", function (req, res) {
    pool.query("SELECT  * FROM тарифи_для_пасажирів_пасажир", function(err, data) {
        if(err) return console.log(err);
        res.render("Taryf_Pasazhyr_P.hbs", {
            users: data
        });
    });
});
app.get("/Taryf_Pasazhyr_P/:value/:value2", urlencodedParser, function(req, res){
    const value = req.params['value'];
    console.log(value);
    const value2 = req.params['value2'];
    pool.query("SELECT  * FROM тарифи_для_пасажирів_пасажир WHERE Посадковий_талоном =? AND Ціна =?",[value,value2], function(err, data) {
        if(err) return console.log(err);
        res.render("Taryf_Pasazhyr_P.hbs", {
            users: data
        });
    });
});
//авіатермінали
app.get("/Aviaterminal_P", function (req, res) {
    pool.query("SELECT  * FROM авіатермінали_пасажир", function(err, data) {
        if(err) return console.log(err);
        res.render("Aviaterminal_P.hbs", {
            users: data
        });
    });
});
app.get("/Aviaterminal_P/:value/:value2", urlencodedParser, function(req, res){
    const value = req.params['value'];
    console.log(value);
    const value2 = req.params['value2'];
    pool.query("SELECT  * FROM авіатермінали_пасажир WHERE Кількість_стійок_паспортного_контролю =? AND Кількість_стійок_реєстрації =?",[value,value2], function(err, data) {
        if(err) return console.log(err);
        res.render("Aviaterminal_P.hbs", {
            users: data
        });
    });
});
app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});
//