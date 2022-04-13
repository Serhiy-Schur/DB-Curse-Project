// // get the client
// const mysql2 = require('mysql2/promise');
// // create the connection to database
// const pool = mysql2.createPool({
//     host: '25.21.56.235,1433',
//     user: 'sergo',
//     password: '12345',
//     database: 'kursach'
// });
//
// const getMarka = async (id) => {
//     return await pool.query('SELECT * FROM lecture.marka WHERE id=?', [id])
// }
//
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
//
// const printAuto = (data) => console.log(data);
// result(1).then(printAuto)
//
// const createDatabase = () => Promise.all([
//     createAutoTable(),
//     createMarkaTable(),
//     createModelTable(),
// ]);
//
// const feelDatabase = () => Promise.all([
//     insertIntoAutoTable(),
//     insertIntoMarkaTable(),
//     insertIntoModelTable(),
// ]);
//
// // створення таблиці для авто
// const createAutoTable = () => pool.query(
//     `CREATE TABLE IF NOT EXISTS auto (
//           id INT NOT NULL AUTO_INCREMENT,
//           marka_id INT NOT NULL,
//           model_id INT NOT NULL,
//           year INT NOT NULL,
//           race INT NOT NULL,
//           status_id INT NOT NULL,
//           PRIMARY KEY (id),
//           UNIQUE INDEX id_UNIQUE (id ASC) VISIBLE)`);
//
// // створення таблиці для марок
// const createMarkaTable = () => pool.query(
//     `CREATE TABLE IF NOT EXISTS marka (
//           id INT NOT NULL AUTO_INCREMENT,
//           name VARCHAR(70) NOT NULL,
//           eng VARCHAR(70) NOT NULL,
//           PRIMARY KEY (id),
//           UNIQUE INDEX id_UNIQUE (id ASC) VISIBLE)`);
//
// // створення таблиці для моделей
// const createModelTable = () => pool.query(
//     `CREATE TABLE IF NOT EXISTS model (
//           id INT NOT NULL AUTO_INCREMENT,
//           name VARCHAR(70) NOT NULL,
//           eng VARCHAR(70) NOT NULL,
//           marka_id VARCHAR(11) NOT NULL,
//           PRIMARY KEY (id),
//           UNIQUE INDEX id_UNIQUE (id ASC) VISIBLE)`);
//
// // наповнюємо базу оголошеннями
// const insertIntoAutoTable = () => pool.query(`
//     INSERT INTO auto VALUES (1,1,1,2012,150,0),(2,1,1,2018,60,0),(3,1,2,2014,180,0),(4,1,2,2016,183,0),(5,1,2,2010,180,0),(6,1,3,2011,92,0),(7,1,2,2014,230,0),(8,1,3,2013,280,0),(9,1,2,2019,160,0),(10,1,2,2012,170,0),(11,4,5,2013,280,0),(12,4,5,2019,160,0),(13,4,5,2012,170,0),(14,4,4,2014,230,0),(15,4,4,2013,280,0),(16,4,4,2019,160,0),(17,5,6,2019,160,0),(18,5,6,2012,170,0),(19,5,7,2013,198,0),(20,5,7,2019,160,0),(21,5,6,2012,170,0),(22,5,7,2014,230,0),(23,1,2,2010,180,0),(24,1,3,2011,61,0),(25,1,2,2014,230,0),(26,1,3,2013,261,0),(27,1,2,2019,160,0),(28,1,2,2012,170,0),(29,4,5,2013,230,0),(30,4,5,2019,160,0),(31,4,5,2012,170,0),(32,4,4,2014,230,0),(33,4,4,2013,320,0),(34,4,4,2019,160,0),(35,5,6,2019,160,0),(36,5,6,2012,170,0),(37,5,7,2013,180,0),(38,5,7,2019,160,0),(39,5,6,2012,170,0),(40,5,7,2014,230,0);
// `);
//
// // наповнюємо базу марками
// const insertIntoMarkaTable = () => pool.query(`
//     INSERT INTO marka VALUES
//     (1,'Audi','audi'),
//     (4,'BMW','bmw'),
//     (5,'Ford','ford')
// `);
//
// // наповнюємо базу моделями
// const insertIntoModelTable = () => pool.query(`
//     INSERT INTO model VALUES
//     (1,'A6','a6',1),
//     (2,'A4','a4',1),
//     (3,'Q5','q5',1),
//     (4,'X3','x3',4),
//     (5,'X5','x5',4),
//     (6,'Focus','focus',5),
//     (7,'Kuga','kuga',5)
// `);
//
// module.exports = {
//     createDatabase,
//     feelDatabase,
// }
