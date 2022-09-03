const app = require('./app'); 

const PORT = 3333; // pode ser qualquer porta, desde que esteja disponível

app.listen(PORT, () => console.log('Estou conectado na porta: ', PORT));