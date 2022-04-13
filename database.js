// // get the client
// const mysql2 = require('mysql2/promise');
// // create the connection to database
// const conn = mysql2.createPool({
//     host: 'localhost',
//     port: '3306',
//     user: 'sergo',
//     password: '12345',
//     database: 'kursach'
// });
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

let querry="SELECT * FROM kursach.екіпаж_адміністратор WHERE екіпаж_адміністратор.кількість_кухарів = 4 AND екіпаж_адміністратор.клас = 2";

conn.query(querry, (err, result, field) => {
   console.log(err);
   console.log(result);
   // console.log(field);
});


// getMarka = async () => {
//     return await conn.query('SELECT * FROM kursach.екіпаж_адміністратор WHERE екіпаж_адміністратор.клас= 2')
//
//
// }
// getMarka();
// console.log(kek)
// const getAuto = async (id) => {
//     return await pool.query('SELECT * FROM auto WHERE model_id=?', [id])
// };
//
// const result = async (id) => {
//     const [ [ modelData ] ] = await pool.query('SELECT * FROM marka,model WHERE marka.name=\'Audi\' AND model.name=\'Q5\'', [id]);
//     const [ [ markaData ]] = await getMarka (modelData.marka_id);
//     const [ [ data ] ] = await getAuto (modelData.id);
//
//     return { ...data,modelData, markaData}
// }

// const printAuto = (data) => console.log(data);
// result(1).then(printAuto)

// const createDatabase = () => Promise.all([
//      createEkipazhTable(),
//      createAviakompaniyaTable(),
//
// ]);

// const feelDatabase = () => Promise.all([
//     insertIntoAutoTable(),
//     insertIntoMarkaTable(),
//     insertIntoModelTable(),
// ]);


// const createEkipazhTable = () => pool.query(
//     `CREATE TABLE IF NOT EXISTS Екіпаж_Адміністратор (
//           Номер_екіпажу INT NOT NULL AUTO_INCREMENT,
//           Клас INT NOT NULL,
//           Кількість_пілотів INT NOT NULL,
//           Кількість_кухарів INT NOT NULL,
//           Кількість_бортпровідників INT NOT NULL,
//           PRIMARY KEY (Номер_екіпажу),
//           UNIQUE INDEX id_UNIQUE (Номер_екіпажу ASC) VISIBLE)`);


// const createAviakompaniyaTable = () => pool.query(
//     `CREATE TABLE IF NOT EXISTS Авіакомпанія_Адміністратор (
//           Номер_авіакомпанії INT NOT NULL AUTO_INCREMENT,
//           Назва_авіакомпанії VARCHAR(70) NOT NULL,
//           Вид_авіакомпанії VARCHAR(70) NOT NULL,
//           Дата_заснування DATE NOT NULL,
//           Контактний_номер_телефону INT NOT NULL,
//           PRIMARY KEY (Номер_авіакомпанії),
//           UNIQUE INDEX id_UNIQUE (Номер_авіакомпанії ASC) VISIBLE)`);

// створення таблиці для моделей
// const createModelTable = () => pool.query(
//     `CREATE TABLE IF NOT EXISTS model (
//           id INT NOT NULL AUTO_INCREMENT,
//           name VARCHAR(70) NOT NULL,
//           eng VARCHAR(70) NOT NULL,
//           marka_id VARCHAR(11) NOT NULL,
//           PRIMARY KEY (id),
//           UNIQUE INDEX id_UNIQUE (id ASC) VISIBLE)`);


module.exports = {
    // createDatabase,
    // feelDatabase,
}
