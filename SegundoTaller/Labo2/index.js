const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const dataFile = '/app/data/contador.txt';

let contador = 0;
try {
    contador = parseInt(fs.readFileSync(dataFile, 'utf8'));
} catch (err) {}

app.get('/', (req, res) => {
    contador++;
    fs.writeFileSync(dataFile, contador.toString());
    res.send(`Contador: ${contador}`);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});