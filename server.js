const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// CORS ko enable karna zaroori hai taaki frontend backend se connect ho sake
app.use(cors());

// Yeh endpoint live time string return karega jo React app ko chahiye
app.get('/api/time', (req, res) => {
    res.json({ time: new Date().toString() });
});

app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
