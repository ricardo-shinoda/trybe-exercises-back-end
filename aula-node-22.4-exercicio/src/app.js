const express = require('express');
const validatePrice = require('../middlewares/validatePrice');
const validateName = require('../middlewares/validateName');
const validateDescription = require('../middlewares/validateDescription');
const validateCreatedAt = require('../middlewares/validateCreatedAt');
const validateRating = require('../middlewares/validateRating');

const app = express();

app.use(express.json()); // mw criado pela comunidade p/ interpretar conteúdo json
app.post('/activities',
    validatePrice,
    validateName,
    validateDescription,
    validateCreatedAt,
    validateRating,
    (_req, res) => {
    res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = app;