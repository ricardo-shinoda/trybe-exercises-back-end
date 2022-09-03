const express = require('express');
const validateTeam = require('./middlewares/validateTeams')

const app = express();
app.use(express.json()); // tudo que chega de res seja um objeto json

const existingId = (req, res, next) => {
    const id = Number(req.params.id);
  
    if (teams.some((t) => t.id === id)) {
      // se existe, a requisição segue para o próximo middleware
      return next();
    }
  
    // se não existe, então vamos retornar o status HTTP 404
    res.sendStatus(404);
  };
  //...
  // a ordem é significativa, embora neste caso faça pouca diferença
  app.put('/teams/:id', existingId, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find(t => t.id === id);
    // não precisamos mais conferir, com certeza o team existe
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
  });
  
  app.delete('/teams/:id', (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find(t => t.id === id);
    const index = teams.indexOf(team);
    teams.splice(index, 1);
    res.sendStatus(200);
  });

module.exports = app;