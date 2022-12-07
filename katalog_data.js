

// CREATE DATA
app.post('/api/kalorin', (req, res) => {
    // buat variabel penampung data dan query sql
    const data = { ...req.body };
    const querySql = `INSERT INTO katalog_data (nama, berat, kalori, gambar) VALUES ('${data.nama}', '${data.berat}', '${data.kalori}', '${data.gambar}')`;

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

// read data / get data
app.get('/api/kalorin', (req, res) => {
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

// update data
app.put('/api/kalorin/:id', (req, res) => {
    // buat variabel penampung data dan query sql

    const data = { ...req.body};
    const querySearch = `SELECT * FROM katalog_data WHERE id = ${req.params.id}`;
    const queryUpdate = `UPDATE katalog_data SET nama = '${data.nama}', berat ='${data.berat}', kalori ='${data.kalori}', gambar='${data.gambar}, '  WHERE id = ${req.params.id}`;

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

// delete data
app.delete('/api/kalorin/:id', (req, res) => {
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