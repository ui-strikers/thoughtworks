let app = require('express');
let bodyParser = require('body-parser');

const CUSTOMER = require('./data/customers.json');
const ORDER = require('./data/orders.json');

const PORT = 5000;
let server = app();

//resolve Xhr CORS policy browser issues 
server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Intermediater data into json formats 
server.use(bodyParser.json());

//read all customers from datasource and returning to API callers
server.get('/api/customers', function (req, res) {
  console.log("Read customers API!!");
  res.status(200).send(CUSTOMER);
});

//read all order from datasource and returning to API callers
server.get('/api/orders', function (req, res) {
  console.log("Read Orders API!!");
  res.status(200).send(ORDER);
});

server.listen(PORT, () => {
  console.log(`Customer API Server is ready on port no:  ${PORT}`);
});