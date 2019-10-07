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
let order = require('./data/orders.json');

//read all customers from datasource and returning to API callers
server.get('/api/customers', function (req, res) {
  console.log("Successfully fetch customers data !!");
  res.status(200).send(customer);
});


//read all orders from datasource and returning to API callers
server.get('/api/orders', function (req, res) {
  console.log("Orders data !!");
  res.status(200).send(order);
});


// api for fetch data according to order id 

server.get('/api/orders/:orderId', function (req, res) {
  console.log(req.params);
  res.status(200).send(order.filter(item => item.orderId == req.params.orderId));
});

// api for fetch data according to payment status 

server.get('/api/orders/payStatus/:status', function (req, res) {
  console.log(req.params);
  res.status(200).send(order.filter(item => item.payStatus == req.params.status));
});


const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server is ready on port ${PORT}`);
});