/*
        ____SERVER ON NODE [EXPRESS]
*/

const express = require('express');
const path = require('path');
const app = express();
const PORT = 5500;

app.use(express.static(path.join(__dirname)));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});