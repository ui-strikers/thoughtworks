let app = require('express');
let bodyParser = require('body-parser');
let data = require('./data/orders.json');
let fs = require('fs');

let server= app();
server.use(bodyParser.json());

server.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', "http://localhost:4200");
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
})

const BASE_API = __dirname + '/data/';

const CUSTOMER_DATA = BASE_API + 'customers.json';
const ORDER_DATA = BASE_API + 'orders.json';

//read all the customers
server.get('/api/customers',function(req,res){
	console.log('Inside read all customers API call');
	res.status(200).sendFile(CUSTOMER_DATA);
});

//read all the orders
server.get('/api/orders',function(req,res){
	console.log('Inside read all orders API call');
	res.status(200).sendFile(ORDER_DATA);
});

//handling form post data
server.post('/api/customers', function (req, res) {
	//const customersDataFile = __dirname+'/data/customers.json';
	let customerArray = fs.readFileSync(CUSTOMER_DATA,'utf-8');
	let json = JSON.parse(customerArray);
	let id = 1000 + json.length+1;
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const gender = req.body.gender;
	const email = req.body.email;
	const address = req.body.address;
	const city = req.body.city;
	const state = req.body.state;
	const obj = { id:id, firstName: firstName , lastName: lastName, gender: gender, email:email ,address:{city:city,state:state}  };
	console.log(json);
	json.push(obj);
	fs.writeFileSync(CUSTOMER_DATA,  JSON.stringify(json));
});


// read all the orders payment status wise
server.get('/api/orders/payment/:status', (req,res) => {
	console.log('Inside read order API call');
	let payStatus = req.params.status;
	let filterArray = [];
	for(var idx in data){
		if(data[idx].payStatus == payStatus){
			filterArray.push(data[idx]);
		}
	}
	res.send(filterArray);
});

// read all the orders fulfillment status wise
server.get('/api/orders/fulfill/:status', (req,res) => {
	console.log('Inside read order API call');
	let fulfillStatus = req.params.status;
	let filterArray = [];
	for(var idx in data){
		if(data[idx].fulfillStatus == fulfillStatus){
			console.log(data[idx]);
			filterArray.push(data[idx]);
		}
	}
	res.send(filterArray);
});

//read all the  customer orders
server.get('/api/customer/:id/orders',function(req,res){
    
    console.log('Inside service');
    
    var customerId = req.params.id;
    let customerOrderArray =[];
    console.log('Customer ID is '+ customerId);
    let customerArray = fs.readFileSync(CUSTOMER_DATA, "utf-8");
    let orderArray = fs.readFileSync(ORDERS_DATA, "utf-8");
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


const PORT = 5000;

//check server listening
server.listen(PORT,() => {
	console.log(`Rest Server is ready on port ${PORT}`);
});