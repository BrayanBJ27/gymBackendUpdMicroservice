const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8090;

// Middleware
app.use(cors());
app.use(express.json());

// Configure the database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Route to update the reservatios machines
app.put('/reservations', (req, res) => {
    const { id } = req.params;
    const { machineName, userName, startTime, endTime } = req.body;
    const updateQuery = 'UPDATE machine_reservations SET machine_name = ?, user_name = ?, start_time = ?, end_time = ? WHERE id = ?';
    db.query(query, [machineName, userName, startTime, endTime, id], (err, result) => {
        if (err) {
            console.error('Error updating reservation:', err);
            res.status(500).send({ message: 'Error updating reservation', error: err });
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).send({ message: 'Reservation not found' });
            return;
        }
        res.send({ message: 'Reservation updated' });
    });
});

// Root route to check if the server is running
app.get('/', (req, res) => {
    res.send('Update Reservations Machine Server Running');
});

app.listen(port, () => {
    console.log(`Machines service listening at http://localhost:${port}`);
});
