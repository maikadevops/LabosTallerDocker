const express = require('express');
const app = express();
const port = 3000;

app.get('/api/message', (req, res) => {
  res.json({ message: '¡Hola desde el backend!' });
});

// Ruta para el chequeo de salud
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
