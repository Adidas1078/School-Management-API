const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/addSchool', (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || !latitude || !longitude) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    db.query(query, [name, address, latitude, longitude], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to add school.' });
        }
        res.status(201).json({ message: 'School added successfully.', schoolId: result.insertId });
    });
});

module.exports = router;