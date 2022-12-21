const express = require('express');
const bodyParser = require('body-parser');
const koneksi = require('./config/database');
const app = express();
const multer = require('multer');
const path = require('path');
var cors = require('cors');

const imageUploadPath = 'C:\Users\HP\Downloads\PWL-PROYEK-HEALTHY-TEAM\Back-End\public\gambar'
// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, imageUploadPath)
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname));
    }
})

const upload = multer({ storage: storage });
const PORT = process.env.PORT || 3306;

// set body parser
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({origin: "*"}))



// --USER--
// Create User
app.post('/user', (req, res) => {
    // buat variabel penampung data dan query sql
    const data = { ...req.body };
    const querySql = `INSERT INTO user (idUser, namaUser, email, password, phone, role) 
                    VALUES('${data.idUser}', '${data.namaUser}', '${data.email}', '${data.password}', '${data.phone}', '${data.role}')`;

    // jalankan query
    koneksi.query(querySql, data, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Gagal insert data!', error: err });
        }
        // jika request berhasil
        res.status(201).json({ success: true, message: 'Berhasil insert data!' });
    });
});

// read user
app.get('/user', (req, res) => {
    // buat query sql
    const querySql = 'SELECT * FROM user';

    // jalankan query
    koneksi.query(querySql, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        // jika request berhasil
        res.status(200).json({ success: true, data: rows });
    });
});

// update user
app.put('/user/:idUser', (req, res) => {
    // buat variabel penampung data dan query sql
    console.log(req.data)
    const data = { ...req.body};
    const querySearch = `SELECT * FROM user WHERE idUser = ${req.params.idUser}`;
    const queryUpdate = `UPDATE user SET namaUser = '${data.namaUser}', email ='${data.email}', password ='${data.password}',
                        phone='${data.phone}, role ='${data.role}', WHERE idUser = ${req.params.idUser}`;

    // jalankan query untuk melakukan pencarian data
    koneksi.query(querySearch, req.params.idUser, (err, rows, field) => {
        //error handling
        if (err){
            return res.status(500).json({message: "Ada kesalahan", error: err });
        }
        //jika id yang dimasukkan sesuai dengan data yang ada di db
        if (rows.length){
            // jalankan query update
            koneksi.query(queryUpdate, [data, req.params.idUser], (err ,rows, field) => {
                //error handling
                if (err){
                    return res.status(500).json({message: 'Ada kesalahan', error: err});
                }
                //Jika update berhasil
                res.status(200).json({success: true, message:'Berhasil update data!'});
            });
        } else {
            return res.status(404).json({message: 'Data tidak ditemukan!', success :false});
        }
    });
});

// delete user
app.delete('/user/:idUser', (req, res) => {
    // buat query sql untuk mencari data dan hapus
    const querySearch = `SELECT * FROM user WHERE idUser = ${req.params.idUser}`;
    const queryDelete = `DELETE FROM user WHERE idUser = ${req.params.idUser}`;

    // jalankan query untuk melakukan pencarian data
    koneksi.query(querySearch, req.params.id, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        // jika id yang dimasukkan sesuai dengan data yang ada di db
        if (rows.length) {
            // jalankan query delete
            koneksi.query(queryDelete, req.params.id, (err, rows, field) => {
                // error handling
                if (err) {
                    return res.status(500).json({ message: 'Ada kesalahan', error: err });
                }

                // jika delete berhasil
                res.status(200).json({ success: true, message: 'Berhasil hapus data!' });
            });
        } else {
            return res.status(404).json({ message: 'Data tidak ditemukan!', success: false });
        }
    });
});

// --KATALOG--
// Create katalog
app.post('/datakatalog',upload.array('gambar'), (req, res) => {
    // buat variabel penampung data dan query sql
    console.log(req.file.filename)
    const data = { ...req.body };
    const querySql = `INSERT INTO datakatalog ( namaKatalog, berat, kalori, gambar) 
                    VALUES ( '${data.namaKatalog}', '${data.berat}', '${data.kalori}', '${req.file.filename}')`;

    // jalankan query
    koneksi.query(querySql, data, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Gagal insert data!', error: err });
        }
        // jika request berhasil
        res.status(201).json({ success: true, message: 'Berhasil insert data!' });
    });
});

// read katalog
app.get('/dataKatalog', (req, res) => {
    // buat query sql
    const querySql = 'SELECT * FROM datakatalog';

    // jalankan query
    koneksi.query(querySql, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        // jika request berhasil
        res.status(200).json({ success: true, data: rows });
    });
});

// read katalog by id
app.get('/datakatalog/:idKatalog', (req, res) => {
    // buat query sql
    const querySql = `SELECT datakatalog SET namaKatalog = '${data.namaKatalog}', berat ='${data.berat}',
                    kalori ='${data.kalori}',gambar='${data.gambar}, '  WHERE idKatalog = ${req.params.idKatalog}`;

    // jalankan query
    koneksi.query(querySql, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        // jika request berhasil
        res.status(200).json({ success: true, data: rows });
    });
});

// update katalog
app.put('/datakatalog/:idKatalog', (req, res) => {
    // buat variabel penampung data dan query sql

    const data = { ...req.body};
    const querySearch = `SELECT * FROM datakatalog WHERE idKatalog = ${req.params.idKatalog}`;
    const queryUpdate = `UPDATE datakatalog SET nama_mamin = '${data.nama_mamin}', berat ='${data.berat}',
                        kalori ='${data.kalori}', gambar='${data.gambar},' WHERE idKatalog = ${req.params.idKatalog}`;

    // jalankan query untuk melakukan pencarian data
    koneksi.query(querySearch, req.params.id, (err, rows, field) => {
        //error handling
        if (err){
            return res.status(500).json({message: "Ada kesalahan", error: err });
        }
        //jika id yang dimasukkan sesuai dengan data yang ada di db
        if (rows.length){
            // jalankan query update
            koneksi.query(queryUpdate, [data, req.params.idKatalog], (err ,rows, field) => {
                //error handling
                if (err){
                    return res.status(500).json({message: 'Ada kesalahan', error: err});
                }
                //Jika update berhasil
                res.status(200).json({success: true, message:'Berhasil update data!'});
            });
        } else {
            return res.status(404).json({message: 'Data tidak ditemukan!', success :false});
        }
    });
});

// delete katalog
app.delete('/datakatalog/:idKatalog', (req, res) => {
    // buat query sql untuk mencari data dan hapus
    const querySearch = `SELECT * FROM datakatalog WHERE idKatalog = ${req.params.idKatalog}`;
    const queryDelete = `DELETE FROM datakatalog WHERE idKatalog = ${req.params.idKatalog}`;

    // jalankan query untuk melakukan pencarian data
    koneksi.query(querySearch, req.params.idKatalog, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        // jika id yang dimasukkan sesuai dengan data yang ada di db
        if (rows.length) {
            // jalankan query delete
            koneksi.query(queryDelete, req.params.id, (err, rows, field) => {
                // error handling
                if (err) {
                    return res.status(500).json({ message: 'Ada kesalahan', error: err });
                }

                // jika delete berhasil
                res.status(200).json({ success: true, message: 'Berhasil hapus data!' });
            });
        } else {
            return res.status(404).json({ message: 'Data tidak ditemukan!', success: false });
        }
    });
});

// --RIWAYAT--
// Create Riwayat
app.post('/riwayat', (req, res) => {
    // buat variabel penampung data dan query sql
    const data = { ...req.body };
    const querySql = `INSERT INTO riwayat (id, tanggal, berat_badan, nama_makan_pagi, nama_minum_pagi, kalori1, nama_makan_siang, nama_minum_siang, kalori2, 
                        nama_makan_sore, nama_makan_sore, kalori3, kalori_total) VALUES ('${data.id}', '${data.tanggal}',
                        '${data.berat_badan}', '${data.nama_makan_pagi}', '${data.nama_minum_pagi}', '${data.kalori1}',
                        '${data.nama_makan_siang}', '${data.nama_minum_siang}', '${data.kalori2}',
                        '${data.nama_makan_sore}', '${data.nama_minum_sore}', '${data.kalori3}', '${data.kalori_total}')`;

    // jalankan query
    koneksi.query(querySql, data, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Gagal insert data!', error: err });
        }
        // jika request berhasil
        res.status(201).json({ success: true, message: 'Berhasil insert data!' });
    });
});

// update riwayat
app.put('/riwayat/:id', (req, res) => {
    // buat variabel penampung data dan query sql

    const data = { ...req.body};
    const querySearch = `SELECT * FROM riwayat WHERE id = ${req.params.id}`;
    const queryUpdate = `UPDATE riwayat SET tanggal = '${data.tanggal}', berat_badan ='${data.berat_badan}',
                        nama_makan_pagi ='${data.nama_makan_pagi}', nama_minum_pagi ='${data.nama_minum_pagi},' kalori1 ='${data.kalori1}',
                        nama_makan_siang='${data.nama_makan_siang}, nama_minum_siang ='${data.nama_minum_siang}', kalori2 ='${data.kalori2}'
                        nama_makan_sore='${data.nama_makan_sore}, nama_minum_sore ='${data.nama_minum_sore}', kalori3 ='${data.kalori3}', '  WHERE id = ${req.params.id}`;

    // jalankan query untuk melakukan pencarian data
    koneksi.query(querySearch, req.params.id, (err, rows, field) => {
        //error handling
        if (err){
            return res.status(500).json({message: "Ada kesalahan", error: err });
        }
        //jika id yang dimasukkan sesuai dengan data yang ada di db
        if (rows.length){
            // jalankan query update
            koneksi.query(queryUpdate, [data, req.params.id], (err ,rows, field) => {
                //error handling
                if (err){
                    return res.status(500).json({message: 'Ada kesalahan', error: err});
                }
                //Jika update berhasil
                res.status(200).json({success: true, message:'Berhasil update data!'});
            });
        } else {
            return res.status(404).json({message: 'Data tidak ditemukan!', success :false});
        }
    });
});

// read riwayat
app.get('/riwayat', (req, res) => {
    // buat query sql
    const querySql = 'SELECT * FROM riwayat';

    // jalankan query
    koneksi.query(querySql, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        // jika request berhasil
        res.status(200).json({ success: true, data: rows });
    });
});

// delete riwayat
app.delete('/riwayat/:id', (req, res) => {
    // buat query sql untuk mencari data dan hapus
    const querySearch = `SELECT * FROM riwayat WHERE id = ${req.params.id}`;
    const queryDelete = `DELETE FROM riwayat WHERE id = ${req.params.id}`;

    // jalankan query untuk melakukan pencarian data
    koneksi.query(querySearch, req.params.id, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        // jika id yang dimasukkan sesuai dengan data yang ada di db
        if (rows.length) {
            // jalankan query delete
            koneksi.query(queryDelete, req.params.id, (err, rows, field) => {
                // error handling
                if (err) {
                    return res.status(500).json({ message: 'Ada kesalahan', error: err });
                }

                // jika delete berhasil
                res.status(200).json({ success: true, message: 'Berhasil hapus data!' });
            });
        } else {
            return res.status(404).json({ message: 'Data tidak ditemukan!', success: false });
        }
    });
});

// --POSTING--
// Create posting
app.post('/posting',upload.single('posting'), (req, res) => {
    // buat variabel penampung data dan query sql
    const data = { ...req.body };
    const querySql = `INSERT INTO posting (id, namaUser, konten, posting) 
                    VALUES ('${data.id}, ${data.namaUser}', '${data.konten}, '${req.file.filename}'')`;

    // jalankan query
    koneksi.query(querySql, data, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Gagal insert data!', error: err });
        }
        // jika request berhasil
        res.status(201).json({ success: true, message: 'Berhasil insert data!' });
    });
});

// read posting
app.get('/posting', (req, res) => {
    // buat query sql
    const querySql = 'SELECT * FROM posting';

    // jalankan query
    koneksi.query(querySql, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        // jika request berhasil
        res.status(200).json({ success: true, data: rows });
    });
});

//download gambar
app.get('/api/gambar/:gambar', (req, res) =>{
   var a =  path.join(__dirname, `public/gambar/${req.params.gambar}`)
   return res.download(a);
}

)

// delete posting
app.delete('/api/posting/:id', (req, res) => {
    // buat query sql untuk mencari data dan hapus
    const querySearch = `SELECT * FROM posting WHERE id = ${req.params.id}`;
    const queryDelete = `DELETE FROM posting WHERE id = ${req.params.id}`;

    // jalankan query untuk melakukan pencarian data
    koneksi.query(querySearch, req.params.id, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        // jika id yang dimasukkan sesuai dengan data yang ada di db
        if (rows.length) {
            // jalankan query delete
            koneksi.query(queryDelete, req.params.id, (err, rows, field) => {
                // error handling
                if (err) {
                    return res.status(500).json({ message: 'Ada kesalahan', error: err });
                }

                // jika delete berhasil
                res.status(200).json({ success: true, message: 'Berhasil hapus data!' });
            });
        } else {
            return res.status(404).json({ message: 'Data tidak ditemukan!', success: false });
        }
    });
});

// server
app.listen(PORT, ()=> console.log(`Server running at port:${PORT}`));
