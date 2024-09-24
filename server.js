const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir los archivos estáticos del build de React
app.use(express.static(path.join(__dirname, 'dist')));

// Ruta de fallback para cualquier petición que no sea API o archivos estáticos
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
