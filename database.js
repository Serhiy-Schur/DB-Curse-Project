const mysql2 = require('mysql2');

const conn = mysql2.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'sergo',
    password: '12345',
    database: 'kursach'
})
conn.connect(err => {
    if (err) {
        console.log(err);
        return err;
    }
    else {
        console.log('Connected OK');
    }
})

// let querry="SELECT * FROM kursach.екіпаж_адміністратор WHERE екіпаж_адміністратор.кількість_кухарів = 4 AND екіпаж_адміністратор.клас = 2";
//
// conn.query(querry, (err, result, field) => {
//    // console.log(err);
//    console.log(result);
//    // console.log(field);
// });

// let querry1="SELECT * FROM kursach.авіакомпанія_адміністратор WHERE авіакомпанія_адміністратор.кількість_кухарів = 5 AND авіакомпанія_адміністратор.клас = 3";
//
// conn.query(querry1, (err, result, field) => {
//     // console.log(err);
//     console.log(result);
//     // console.log(field);
// });

///Створення таблиці Екіпаж_Адміністратор
// const createEkipazhTable = () => conn.query(
//     `CREATE TABLE IF NOT EXISTS Екіпаж_Адміністратор (
//           Номер_екіпажу INT NOT NULL AUTO_INCREMENT,
//           Клас INT NOT NULL,
//           Кількість_пілотів INT NOT NULL,
//           Кількість_кухарів INT NOT NULL,
//           Кількість_бортпровідників INT NOT NULL,
//           PRIMARY KEY (Номер_екіпажу),
//           UNIQUE INDEX id_UNIQUE (Номер_екіпажу ASC) VISIBLE)`);

///Створення таблиці Авіакомпанія_Адміністратор
// const createAviakompaniyaTable = () =>conn.query(
//     `CREATE TABLE IF NOT EXISTS Авіакомпанія_Адміністратор (
//           Номер_авіакомпанії INT NOT NULL AUTO_INCREMENT,
//           Назва_авіакомпанії VARCHAR(70) NOT NULL,
//           Вид_авіакомпанії VARCHAR(70) NOT NULL,
//           Дата_заснування DATE NOT NULL,
//           Контактний_номер_телефону INT NOT NULL,
//           PRIMARY KEY (Номер_авіакомпанії),
//           UNIQUE INDEX id_UNIQUE (Номер_авіакомпанії ASC) VISIBLE)`);

///Створення таблиці Аеропорт_Адміністратор
// const createAeroportTable = () =>conn.query(
//     `CREATE TABLE IF NOT EXISTS Аеропорт_Адміністратор (
//           Назва_аеропорту INT NOT NULL AUTO_INCREMENT,
//           Країна_розташування VARCHAR(70) NOT NULL,
//           Місто_розташування VARCHAR(70) NOT NULL,
//           Кількість_літаків INT NOT NULL,
//           Кількість_терміналів INT NOT NULL,
//           PRIMARY KEY (Назва_аеропорту),
//           UNIQUE INDEX id_UNIQUE (Назва_аеропорту ASC) VISIBLE)`);

///Створення таблиці Маршрут_Адміністратор
// const createMarshrutTable = () =>conn.query(
//     `CREATE TABLE IF NOT EXISTS Маршрут_Адміністратор (
//           Номер_маршруту INT NOT NULL AUTO_INCREMENT,
//           Країна_відправлення VARCHAR(70) NOT NULL,
//           Країна_прибуття VARCHAR(70) NOT NULL,
//           Довжина INT NOT NULL,
//           Статус_маршруту VARCHAR(70) NOT NULL,
//           PRIMARY KEY (Номер_маршруту),
//           UNIQUE INDEX id_UNIQUE (Номер_маршруту ASC) VISIBLE)`);

///Створення таблиці Пасажир_Адміністратор
// const createPasazhyrTable = () =>conn.query(
//     `CREATE TABLE IF NOT EXISTS Пасажир_Адміністратор (
//           Номер_пасажира INT NOT NULL AUTO_INCREMENT,
//           ПІБ_пасажира VARCHAR(100) NOT NULL,
//           Дата_народження DATE NOT NULL,
//           Стать VARCHAR(70) NOT NULL,
//           Країна VARCHAR(70) NOT NULL,
//           Номер_телефону_пасажира INT NOT NULL,
//           PRIMARY KEY (Номер_пасажира),
//           UNIQUE INDEX id_UNIQUE (Номер_пасажира ASC) VISIBLE)`);

///Створення таблиці Рейс_Адміністратор
// const createRaysTable = () =>conn.query(
//     `CREATE TABLE IF NOT EXISTS Рейс_Адміністратор (
//           Номер_рейсу INT NOT NULL AUTO_INCREMENT,
//           Час_вильоту INT NOT NULL,
//           Дата_вильоту DATE NOT NULL,
//           Час_в_шляху INT NOT NULL,
//           PRIMARY KEY (Номер_рейсу),
//           UNIQUE INDEX id_UNIQUE (Номер_рейсу ASC) VISIBLE)`);

///Створення таблиці Білет_Адміністратор
// const createBiletTable = () =>conn.query(
//     `CREATE TABLE IF NOT EXISTS Білет_Адміністратор (
//           Номер_білета INT NOT NULL AUTO_INCREMENT,
//           Дата_продажу DATE NOT NULL,
//           Ціна INT NOT NULL,
//           PRIMARY KEY (Номер_білета),
//           UNIQUE INDEX id_UNIQUE (Номер_білета ASC) VISIBLE)`);

///Створення таблиці Літак_Адміністратор
// const createRaysTable = () =>conn.query(
//     `CREATE TABLE IF NOT EXISTS Літак_Адміністратор (
//           Номер_літака INT NOT NULL AUTO_INCREMENT,
//           Марка_літака VARCHAR(70) NOT NULL,
//           Модель_літака INT NOT NULL,
//           Тип_літака VARCHAR(70) NOT NULL,
//           PRIMARY KEY (Номер_літака),
//           UNIQUE INDEX id_UNIQUE (Номер_літака ASC) VISIBLE)`);
