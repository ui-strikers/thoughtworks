let app = require('express');
let bodyParser = require('body-parser');

let server= app();
server.use(bodyParser.json());

server.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', "http://localhost:4200");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

const BASE_API = __dirname + '/data/';

const ORDERS_DATA_FILE = BASE_API + 'orders.json';
const CUSTOMER_DATA_FILE = BASE_API + 'customers.json';

var fs = require('fs');

//read all the orders
server.get('/api/customer/:id/orders',function(req,res){
    
    console.log('Inside service');
    
    var customerId = req.params.id;
    let customerOrderArray =[];
    console.log('Customer ID is '+ customerId);
    let customerArray = fs.readFileSync(CUSTOMER_DATA_FILE, "utf-8");
    let orderArray = fs.readFileSync(ORDERS_DATA_FILE, "utf-8");
    var respObj ={};
    let parseOrderArray = JSON.parse(orderArray);
    var total =0;
 
    for (let order of parseOrderArray) {
        customerOrderArray = parseOrderArray.filter((order) => {
             return customerId == order.customerId;                           
        });
    }
    
    for (let order of customerOrderArray) {
        
        for (let product of order.products) {
            
            respObj[order.orderId+ "-" +product.productName]  = product.orderPrice;
            total = total+ product.orderPrice;
        }
    }
    respObj["Total"] = total;
    res.send(respObj);
    
});

const PORT = 4100;

//check server listening
server.listen(PORT,() => {
    console.log(`Rest Server is ready on port ${PORT}`);
});