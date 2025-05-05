const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para permitir JSON no body
app.use(express.json());

// Rota simples
app.get('/index', (req, res) => {
  res.send('Olá, mundo!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname, 'public')));

// Rota principal (opcional, pois o index.html já será carregado)
app.get('/inicio', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});
