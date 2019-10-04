let app = require('express');
let bodyParser = require('body-parser');

let server = app();
//resolve Xhr CORS policy browser issues 
server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Intermediater data into json formats 
server.use(bodyParser.json());

let customer = require('./data/customers.json');

//read all customers from datasource and returning to API callers
server.get('/api/customers', function (req, res) {
  console.log("Successfully fetch customers data !!");
  res.status(200).send(customer);
});
const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server is ready on port ${PORT}`);
});