const express = require('express');
const router = express.Router();
const db = require('../db');

// Helper function to calculate distance
function haversine(lat1, lon1, lat2, lon2) {
    const toRad = angle => (angle * Math.PI) / 180;
    const R = 6371; // Earth's radius in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

router.get('/listSchools', (req, res) => {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        return res.status(400).json({ error: 'Latitude and longitude are required.' });
    }

    const query = 'SELECT * FROM schools';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch schools.' });
        }

        const userLat = parseFloat(latitude);
        const userLon = parseFloat(longitude);

        const schoolsWithDistance = results.map(school => ({
            ...school,
            distance: haversine(userLat, userLon, school.latitude, school.longitude)
        }));

        schoolsWithDistance.sort((a, b) => a.distance - b.distance);

        res.json(schoolsWithDistance);
    });
});

module.exports = router;
