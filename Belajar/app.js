const express = require('express');
const bodyParser = require('body-parser');
const koneksi = require ('./config/database');
const app = express();
const PORT = process.env.PORT || 5000;

// Set Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// create data / insert data
app.post('/api/bootcamp', (req, res) => {
    // buat variabel penampung data dan query SQL
    const data = {...req.body};
    // Buat manggil data  console.log("file request",data)
    const querySql = `INSERT INTO bootcamp (name, description, website, phone, email, address) VALUES ('${data.name}', '${data.description}', '${data.website}', '${data.phone}', '${data.email}', '${data.address}' )`;

    //Jalankan Query
    koneksi.query(querySql, data, (err,rows,field)=> {
        //error handling
        if (err){
            return res.status(500).json({message: 'Gagal insert data!', error: err, data : data});
        }

        //jika request berhasil
        res.status(201).json({ success: true, message: 'Berhasil insert data!'});
    });
})

// read data / get data
app.get('/api/bootcamp', (req, res) => {
    //buat query sql
    const querySql = 'SELECT * FROM bootcamp';
    console.log("file request", data)

    //Jalankan query
    koneksi.query(querySql, (err, rows, field) => {
        //error handling
        if (err) {
            return res.status(500).json({ message: "Ada kesalahan", error:err });
        }
        //jika request berhasil
        res.status(200).json({ success : true, data: rows});
    });
});

// update data
app.put('/api/bootcamp/:id', (req, res) => {
    // buat variabel penampung data dan query sql

    const data = { ...req.body};
    const querySearch = 'SELECT * FROM bootcamp WHERE id';
    const queryUpdate = "UPDATE bootcamp SET description = 'Devc++', email = 'enroll@devc++.com' WHERE id = 2";

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

//buat servernya
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));