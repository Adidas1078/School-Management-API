const express = require('express');
const bodyParser = require('body-parser');
const addSchool = require('./routes/addSchool');
const listSchools = require('./routes/listSchools');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the School Management API!');
});
// Routes
app.use('/api', addSchool);
app.use('/api', listSchools);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
