const express = require('express');

const app = express();

app.use(express.json()); // mw criado pela comunidade p/ interpretar conteúdo json

module.exports = app;