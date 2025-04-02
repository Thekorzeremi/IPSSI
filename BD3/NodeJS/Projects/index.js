const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 4000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password'
});

connection.connect(error => {
    if (error) throw error;
    console.log('Successfully connected to MySQL.');
    
    connection.query('CREATE DATABASE IF NOT EXISTS vehicle_agency', (err) => {
        if (err) throw err;
        console.log('Database created or already exists');
        
        connection.query('USE vehicle_agency', (err) => {
            if (err) throw err;
            console.log('Using vehicle_agency database');
            
            const createAgenciesTable = `
                CREATE TABLE IF NOT EXISTS agencies (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(100) NOT NULL,
                    address TEXT NOT NULL,
                    phone VARCHAR(20) NOT NULL,
                    email VARCHAR(100) NOT NULL
                )
            `;
            
            connection.query(createAgenciesTable, (err) => {
                if (err) throw err;
                console.log('Agencies table created or already exists');
                
                connection.query('DROP TABLE IF EXISTS vehicles', (dropErr) => {
                    if (dropErr) throw dropErr;
                    console.log('Vehicles table dropped');

                    const createVehiclesTable = `
                        CREATE TABLE vehicles (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            agency_id INT,
                            brand VARCHAR(50) NOT NULL,
                            model VARCHAR(50) NOT NULL,
                            plate VARCHAR(20) NOT NULL,
                            year INT NOT NULL,
                            status ENUM('disponible', 'loue', 'reparation') DEFAULT 'disponible',
                            price_per_day DECIMAL(10,2) NOT NULL,
                            FOREIGN KEY (agency_id) REFERENCES agencies(id) ON DELETE CASCADE
                        )
                    `;
                
                    connection.query(createVehiclesTable, (err) => {
                        if (err) throw err;
                        console.log('Vehicles table created successfully');
                    });
                });
            });
        });
    });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    connection.query('SELECT * FROM agencies', (error, agencies) => {
        if (error) throw error;
        res.render('index', { agencies });
    });
});

app.post('/agency/add', (req, res) => {
    const { name, address, phone, email } = req.body;
    const query = 'INSERT INTO agencies (name, address, phone, email) VALUES (?, ?, ?, ?)';
    connection.query(query, [name, address, phone, email], (error) => {
        if (error) throw error;
        res.redirect('/');
    });
});

app.post('/agency/update/:id', (req, res) => {
    const { name, address, phone, email } = req.body;
    const query = 'UPDATE agencies SET name = ?, address = ?, phone = ?, email = ? WHERE id = ?';
    connection.query(query, [name, address, phone, email, req.params.id], (error) => {
        if (error) throw error;
        res.redirect('/');
    });
});

app.get('/agency/delete/:id', (req, res) => {
    connection.query('DELETE FROM agencies WHERE id = ?', [req.params.id], (error) => {
        if (error) throw error;
        res.redirect('/');
    });
});

app.get('/vehicles/:agencyId', (req, res) => {
    connection.query('SELECT * FROM vehicles WHERE agency_id = ?', [req.params.agencyId], (error, vehicles) => {
        if (error) throw error;
        res.render('vehicles', { vehicles, agencyId: req.params.agencyId });
    });
});

app.post('/vehicle/add', (req, res) => {
    const { agency_id, brand, model, plate, year, status, price_per_day } = req.body;
    const query = 'INSERT INTO vehicles (agency_id, brand, model, plate, year, status, price_per_day) VALUES (?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [agency_id, brand, model, plate, year, status, price_per_day], (error) => {
        if (error) throw error;
        res.redirect('/vehicles/' + agency_id);
    });
});

app.post('/vehicle/update/:id', (req, res) => {
    const { brand, model, plate, year, status, price_per_day, agency_id } = req.body;
    const query = 'UPDATE vehicles SET brand = ?, model = ?, plate = ?, year = ?, status = ?, price_per_day = ? WHERE id = ?';
    connection.query(query, [brand, model, plate, year, status, price_per_day, req.params.id], (error) => {
        if (error) throw error;
        res.redirect('/vehicles/' + agency_id);
    });
});

app.get('/vehicle/delete/:id/:agencyId', (req, res) => {
    connection.query('DELETE FROM vehicles WHERE id = ?', [req.params.id], (error) => {
        if (error) throw error;
        res.redirect('/vehicles/' + req.params.agencyId);
    });
});

app.get('/vehicle/counter/', (req, res) => {
    connection.query('SELECT a.name, COUNT(v.id) AS nb_vehicule, AVG(v.price_per_day) AS moyenne_prix FROM vehicles v JOIN agencies a ON agency_id = a.id GROUP BY a.name', (error, results) => {
        if (error) throw error;
        res.render('counter', { results });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
