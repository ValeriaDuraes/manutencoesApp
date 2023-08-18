const express = require('express');

const allCustomers = [{ nome: 'Valéria', status: false}]; // Criada a array de clientes enquanto o banco não é configurado no Docker

const registrationRoutes = express.Router(); // Para criar as rotas

// CREATE
registrationRoutes.post('/customers', (request, response) => {
  const { name } = request.body;
  allCustomers.push({ name, status: false });
  return response.status(201).json(allCustomers); // status 201 resp de criado c/ sucesso indicando que a req foi bem sucedida!
});

// READ
registrationRoutes.get('/customers', (request, response) => {
  return response.status(200).json(allCustomers); // status 200 indica sucesso
});

module.exports = registrationRoutes;
