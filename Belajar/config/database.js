const mysql = require ('mysql')

//buat konfigurasi koneksi
const koneksi = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'bootcamp',
    multipleStatements : true
});

//Koneksi Database
koneksi.connect((err => {
    if (err) throw err;
    console.log('MySQL Connected...');
}));
module.exports = koneksi;