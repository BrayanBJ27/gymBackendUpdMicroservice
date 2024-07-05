const express = require('express');
const router = express.Router();

module.exports = (db) => {
    // Route to update a machine reservation
    router.put('/:id', (req, res) => {
        const { id } = req.params;
        const { machineName, userName, startTime, endTime } = req.body;
        const updateQuery = 'UPDATE machine_reservations SET machine_name = ?, user_name = ?, start_time = ?, end_time = ? WHERE id = ?';
        db.query(updateQuery, [machineName, userName, startTime, endTime, id], (err, result) => {
            if (err) {
                console.error('Error updating reservation:', err);
                return res.status(500).json({ message: 'Error updating reservation', error: err });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Reservation not found' });
            }
            res.json({ message: 'Reservation updated' });
        });
    });

    return router;
};