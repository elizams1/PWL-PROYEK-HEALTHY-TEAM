const express = require('express');
const bodyParser = require('body-parser');
const koneksi = require('./config/database');
const app =express ();
const multer = require('multer');
const path = require('path');

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/gambar')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname));
    }
})

const upload = multer({ storage: storage });
const PORT = process.env.PORT || 5000;

// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// upload gambar
app.post('/gambar', upload.single('gambar'),(req, res) =>{
    res.send('berhasil')
})
// upload gambar
app.post('/gambar1', upload.single('posting'),(req, res) =>{
    res.send('berhasil')
})

// --USER--
// Create User
app.post('/user', (req, res) => {
    // buat variabel penampung data dan query sql
    const data = { ...req.body };
    const querySql = `INSERT INTO user (id, nama, email, password, phone, role) 
                    VALUES('${data.id}', '${data.nama}', '${data.email}', '${data.password}', '${data.phone}', '${data.role}')`;

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
app.put('/user/:id', (req, res) => {
    // buat variabel penampung data dan query sql
    console.log(req.data)
    const data = { ...req.body};
    const querySearch = `SELECT * FROM user WHERE id = ${req.params.id}`;
    const queryUpdate = `UPDATE user SET nama = '${data.nama}', email ='${data.email}', password ='${data.password}',
                        phone='${data.phone}, role ='${data.role}', WHERE id = ${req.params.id}`;

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

// delete user
app.delete('/user/:id', (req, res) => {
    // buat query sql untuk mencari data dan hapus
    const querySearch = `SELECT * FROM user WHERE id = ${req.params.id}`;
    const queryDelete = `DELETE FROM user WHERE id = ${req.params.id}`;

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
app.post('/katalog_data', (req, res) => {
    // buat variabel penampung data dan query sql
    const data = { ...req.body };
    const querySql = `INSERT INTO katalog_data (id, nama_mamin, berat, kalori, gambar) 
                    VALUES ('${data.id}', '${data.nama_mamin}', '${data.berat}', '${data.kalori}', '${data.gambar}')`;

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
app.get('/katalog_data', (req, res) => {
    // buat query sql
    const querySql = 'SELECT * FROM katalog_data';

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
app.get('/katalog_data/:id', (req, res) => {
    // buat query sql
    const querySql = `SELECT katalog_data SET nama = '${data.nama_mamin}', berat ='${data.berat}',
                    kalori ='${data.kalori}',gambar='${data.gambar}, '  WHERE id = ${req.params.id}`;

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
app.put('/katalog_data/:id', (req, res) => {
    // buat variabel penampung data dan query sql

    const data = { ...req.body};
    const querySearch = `SELECT * FROM katalog_data WHERE id = ${req.params.id}`;
    const queryUpdate = `UPDATE katalog_data SET nama_mamin = '${data.nama_mamin}', berat ='${data.berat}',
                        kalori ='${data.kalori}', gambar='${data.gambar},' WHERE id = ${req.params.id}`;

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

// delete katalog
app.delete('/katalog_data/:id', (req, res) => {
    // buat query sql untuk mencari data dan hapus
    const querySearch = `SELECT * FROM katalog_data WHERE id = ${req.params.id}`;
    const queryDelete = `DELETE FROM katalog_data WHERE id = ${req.params.id}`;

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
app.post('/posting', (req, res) => {
    // buat variabel penampung data dan query sql
    const data = { ...req.body };
    const querySql = `INSERT INTO posting (id, nama_user, konten) VALUES ('${data.id}, ${data.nama_user}', '${data.konten}')`;

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
