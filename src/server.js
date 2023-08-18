const express = require('express'); // Importando o express
const registrationRoutes = require('./customersRegistration');

const app = express(); // Cria a instância

app.use(express.json()); // Dizer para o servidor que usaremos JSON
app.use(registrationRoutes);

// TESTE

app.get('/health', (req, res) => { // Criando uma rota de leitura p/ ver se o servidor está ok
  return res.json('up')
});

app.listen(3333, () => console.log('Server up in 3333 port')); // Testado no insomnia, server ok
