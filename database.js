const mysql2 = require('mysql2');

const conn = mysql2.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'sergo',
    password: '12345',
    database: 'kursach'
})

///Ann connection
//     host: '25.22.131.112',
//     port: '3306',
//     user: 'sergo',
//     password: '12345',
//     database: 'kursach'


conn.connect(err => {
    if (err) {
        console.log(err);
        return err;
    }
    else {
        console.log('Connected OK');
    }
})
// const createDatabaseAdmin = () => Promise.all([
//     createEkipazhTable(),
//     createAviakompaniyaTable(),
//     createPasazhyrTable(),
//     createBiletTable(),
//     createRaysTable(),
//     createAeroportTable(),
//     createMarshrutTable(),
// ]);






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

// ///Створення таблиці Екіпаж_Адміністратор
// const createEkipazhTable = () => conn.query(
//     `CREATE TABLE IF NOT EXISTS Екіпаж_Адміністратор (
//           Номер_екіпажу INT NOT NULL AUTO_INCREMENT,
//           Клас INT NOT NULL,
//           Кількість_пілотів INT NOT NULL,
//           Кількість_кухарів INT NOT NULL,
//           Кількість_бортпровідників INT NOT NULL,
//           PRIMARY KEY (Номер_екіпажу),
//           UNIQUE INDEX id_UNIQUE (Номер_екіпажу ASC) VISIBLE)`);
//
// ///Створення таблиці Авіакомпанія_Адміністратор
// const createAviakompaniyaTable = () =>conn.query(
//     `CREATE TABLE IF NOT EXISTS Авіакомпанія_Адміністратор (
//           Номер_авіакомпанії INT NOT NULL AUTO_INCREMENT,
//           Назва_авіакомпанії VARCHAR(70) NOT NULL,
//           Вид_авіакомпанії VARCHAR(70) NOT NULL,
//           Дата_заснування DATE NOT NULL,
//           Контактний_номер_телефону INT NOT NULL,
//           PRIMARY KEY (Номер_авіакомпанії),
//           UNIQUE INDEX id_UNIQUE (Номер_авіакомпанії ASC) VISIBLE)`);
//
// ///Створення таблиці Аеропорт_Адміністратор
// const createAeroportTable = () =>conn.query(
//     `CREATE TABLE IF NOT EXISTS Аеропорт_Адміністратор (
//           Назва_аеропорту INT NOT NULL AUTO_INCREMENT,
//           Країна_розташування VARCHAR(70) NOT NULL,
//           Місто_розташування VARCHAR(70) NOT NULL,
//           Кількість_літаків INT NOT NULL,
//           Кількість_терміналів INT NOT NULL,
//           PRIMARY KEY (Назва_аеропорту),
//           UNIQUE INDEX id_UNIQUE (Назва_аеропорту ASC) VISIBLE)`);
//
// ///Створення таблиці Маршрут_Адміністратор
// const createMarshrutTable = () =>conn.query(
//     `CREATE TABLE IF NOT EXISTS Маршрут_Адміністратор (
//           Номер_маршруту INT NOT NULL AUTO_INCREMENT,
//           Країна_відправлення VARCHAR(70) NOT NULL,
//           Країна_прибуття VARCHAR(70) NOT NULL,
//           Довжина INT NOT NULL,
//           Статус_маршруту VARCHAR(70) NOT NULL,
//           PRIMARY KEY (Номер_маршруту),
//           UNIQUE INDEX id_UNIQUE (Номер_маршруту ASC) VISIBLE)`);
//
// ///Створення таблиці Пасажир_Адміністратор
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
//
// ///Створення таблиці Рейс_Адміністратор
// const createRaysTable = () =>conn.query(
//     `CREATE TABLE IF NOT EXISTS Рейс_Адміністратор (
//           Номер_рейсу INT NOT NULL AUTO_INCREMENT,
//           Час_вильоту INT NOT NULL,
//           Дата_вильоту DATE NOT NULL,
//           Час_в_шляху INT NOT NULL,
//           PRIMARY KEY (Номер_рейсу),
//           UNIQUE INDEX id_UNIQUE (Номер_рейсу ASC) VISIBLE)`);
//
// ///Створення таблиці Білет_Адміністратор
// const createBiletTable = () =>conn.query(
//     `CREATE TABLE IF NOT EXISTS Білет_Адміністратор (
//           Номер_білета INT NOT NULL AUTO_INCREMENT,
//           Дата_продажу DATE NOT NULL,
//           Ціна INT NOT NULL,
//           PRIMARY KEY (Номер_білета),
//           UNIQUE INDEX id_UNIQUE (Номер_білета ASC) VISIBLE)`);
//
// ///Створення таблиці Літак_Адміністратор
// const createRaysTable = () =>conn.query(
//     `CREATE TABLE IF NOT EXISTS Літак_Адміністратор (
//           Номер_літака INT NOT NULL AUTO_INCREMENT,
//           Марка_літака VARCHAR(70) NOT NULL,
//           Модель_літака INT NOT NULL,
//           Тип_літака VARCHAR(70) NOT NULL,
//           PRIMARY KEY (Номер_літака),
//           UNIQUE INDEX id_UNIQUE (Номер_літака ASC) VISIBLE)`);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ///Створення таблиці Екіпаж_Пасажир
// const createEkipazhTable = () => conn.query(
//     `CREATE TABLE IF NOT EXISTS Екіпаж_Пасажир (
//           ПІБ VARCHAR(100) NOT NULL,
//           Посада VARCHAR(70) NOT NULL,
//           Кількість_вильотів INT NOT NULL,
//           Стаж INT NOT NULL)`);
//
// ///Створення таблиці Авіатермінали_Пасажир
// const createAviaterminalTable = () =>conn.query(
//     `CREATE TABLE IF NOT EXISTS Авіатермінали_Пасажир (
//           Індентифікатор INT NOT NULL,
//           Оператор VARCHAR(70) NOT NULL,
//           Стійки_реєстраціїї INT NOT NULL,
//           Стійки_паспортного_контроля INT NOT NULL)`);
//
// ///Створення таблиці Аеропорт_Пасажир
// const createAeroportTable = () =>conn.query(
//     `CREATE TABLE IF NOT EXISTS Аеропорт_Пасажир (
//           Назва INT NOT NULL,
//           Країна VARCHAR(70) NOT NULL,
//           Адреса INT NOT NULL,
//           Кількість_літаків INT NOT NULL,
//           Кількість_персоналу INT NOT NULL)`);
//
// ///Створення таблиці Тарифи для пасажирів_Пасажир
// const createTaryfPasazhyrTable = () =>conn.query(
//     `CREATE TABLE IF NOT EXISTS Тарифи_для_пасажирів_Пасажир (
//           Назва_тарифу_для_пасажирів INT NOT NULL,
//           Багаж INT NOT NULL,
//           Ручна_поклажа INT NOT NULL,
//           Ціна INT NOT NULL,
//           Вибір_місця VARCHAR(70) NOT NULL,
//           Зміна_бронювання VARCHAR(70) NOT NULL)`);
//
// ///Створення таблиці Тарифи на перевезення тварин_Пасажир
// const createTaryfTvarynaTable = () =>conn.query(
//     `CREATE TABLE IF NOT EXISTS Тарифи_на_перевезення_тварин_Пасажир (
//           Назва_тарифу_для_тварин INT NOT NULL,
//           Тварина VARCHAR(70) NOT NULL,
//           Ціна INT NOT NULL,
//           Габарити(в*ш*г) INT NOT NULL,
//           Вага(кг) INT NOT NULL)`);

///Створення таблиці Рейс_Пасажир
// const createRaysTable = () =>conn.query(
//     `CREATE TABLE IF NOT EXISTS Рейс_Пасажир (
//           Номер_рейсу INT NOT NULL,
//           Час_вильоту INT NOT NULL,
//           Дата_вильоту DATE NOT NULL,
//           Дата_прибуття DATE NOT NULL,
//           Час_прибуття INT NOT NULL)`);
//
// ///Створення таблиці Квиток_Пасажир
// const createKvytokTable = () =>conn.query(
//     `CREATE TABLE IF NOT EXISTS Квиток_Пасажир (
//           Індифікатор_квитка INT NOT NULL,
//           Дата_продажу DATE NOT NULL,
//           Ціна INT NOT NULL,
//           ПІБ_касира VARCHAR(100) NOT NULL,
//           Місце INT NOT NULL)`);
//
// ///Створення таблиці Літак_Пасажир
// const createLitakTable = () =>conn.query(
//     `CREATE TABLE IF NOT EXISTS Літак_Пасажир (
//           Номер INT NOT NULL,
//           Марка VARCHAR(70) NOT NULL,
//           Модель INT NOT NULL,
//           Дата_випуску DATE NOT NULL,
//           Місткість_багажу INT NOT NULL,
//           Кількість_пасажирів INT NOT NULL)`);

// module.exports = {
//     createDatabaseAdmin
// }
// createRaysTable();
// createAviaterminalTable();
// createTaryfPasazhyrTable();
// createTaryfTvarynaTable();
// createAeroportTable();
// createEkipazhTable();
// createLitakTable();
// createKvytokTable();



////////////////////////////
///Запити Сергій
//SELECT Номер_екіпажу, Кількість_пілотів, Кількість_бортпровідників FROM kursach.екіпаж_адміністратор WHERE  Кількість_кухарів > ? AND Клас =?;
//SELECT Номер_авіакомпанії, Вид_авіакомпанії, Дата_заснування FROM kursach.авіакомпанія_адміністратор WHERE Контактний_номер_телефону =? AND Назва_авіакомпанії =?
//SELECT Кількість_літаків, Місто_розташування, Кількість_терміналів FROM kursach.аеропорт_адміністратор WHERE Країна_розташування =? AND Назва_аеропорту =?
//SELECT Номер_маршруту, Країна_відправлення, Статус_маршруту FROM kursach.маршрут_адміністратор WHERE Довжина <? AND Країна_прибуття =?
//SELECT Номер_пасажира, ПІБ_пасажира, Дата_народження, Номер_телефону_пасажира FROM kursach.пасажир_адміністратор WHERE Стать =? AND Країна =?
//SELECT Номер_рейсу, Маршрут, Літак_перевізник, Екіпаж, Час_вильоту FROM kursach.рейс_адміністратор WHERE Час_в_шляху =? AND Дата_вильоту =?
//SELECT Номер_білета, Авіакомпанія, Літак, Пасажир, Ціна FROM kursach.білет_адміністратор WHERE Дата_продажу =? AND Рейс =?
//SELECT Тип_літака, Номер_літака, Модель_літака FROM kursach.літак_адміністратор WHERE Марка_літака =? AND Авіакомпанія_власник =?
////////////////////////////

////////////////////////////
///Запити Анна
//SELECT* FROM рейс_пасажир WHERE Дата_прибуття = ? AND Країна_прибуття =?;
//SELECT * FROM літак_пасажир WHERE Дата_випуску =? AND Марка =?
//SELECT  * FROM квиток_пасажир WHERE Ціна < AND Дата_продажу <?
//SELECT  * FROM екіпаж_пасажир WHERE Кількість_вильтів =? AND Стаж =?
//SELECT  * FROM аеропорт_пасажир WHERE Кількість_літаків >? AND Кількість_персоналу <?
//SELECT  * FROM тарифи_на_перевезення_тварин_пасажир WHERE Ціна =? AND Габарити(в*ш*г) =?
//SELECT  * FROM тарифи_для_пасажирів_пасажир WHERE Посадковий_талоном =? AND Ціна =?
//SELECT  * FROM авіатермінали_пасажир WHERE Кількість_стійок_паспортного_контролю =? AND Кількість_стійок_реєстрації =?
////////////////////////////
///Запити Анна
//
//
//
//
//
//
//
//
/////////////////////////////