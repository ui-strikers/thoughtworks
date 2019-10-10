let app = require('express');
let fs = require("fs");
let bodyParser = require('body-parser');
let server = app();

//resolve xhr CORS policy browser issues 
server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Intermediater data into json formats 
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

let customer = require('./data/customers.json');
let order = require('./data/orders.json');

//read all customers data and returning to API callers
server.get('/api/customers', function (req, res) {
  console.log("Read customers API!!");
  res.status(200).send(customer);
});

//adding customers details and getting response
server.post("/api/customers", function (req, res) {
  fs.readFile(customer, 'utf8', (err, data) => {
    if (err) {
      return res.send(406, "Getting error while adding customer!!");
    }
    let customers = JSON.parse(data);
    let lastId = customers[customers.length - 1].id;
    let newCustomer = {
      ...req.body, id: lastId + 1
    }
    //adding new customer in json file
    customers.push(newCustomer)
    fs.writeFile(customer, JSON.stringify(customers, null, 2), () => {
      res.send(200, customers);
    });
  })
});

//read all orders data and returning to API callers
server.get('/api/orders', function (req, res) {
  console.log("Read Orders API!!");
  res.status(200).send(order);
});

//read all order data according to order id 
server.get('/api/orders/:orderId', function (req, res) {
  console.log(req.params);
  res.status(200).send(order.filter(item => item.orderId == req.params.orderId));
});

//read all order data according to Payment Status 
server.get('/api/orders/payStatus/:status', function (req, res) {
  console.log(req.params);
  res.status(200).send(order.filter(item => item.payStatus == req.params.status));
});

//read all order data according to Fulfillment Status 
server.get('/api/orders/fulfillStatus/:status', function (req, res) {
  console.log(req.params);
  res.status(200).send(order.filter(item => (item.fulfillStatus).toString() == req.params.status));
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`API Server is ready on port no: ${PORT}`);
});