const express = require('express');

const app = express();

app.use(express.json()); // mw criado pela comunidade p/ interpretar conteúdo json
app.post('/activities', (req, res) => {
    res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = app;