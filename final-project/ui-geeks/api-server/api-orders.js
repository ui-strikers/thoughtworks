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

const ORDER_API = BASE_API + 'orders.json';

//read all the orders
server.get('/api/orders',function(req,res){
	console.log('Inside read all orders API call');
	res.status(200).sendFile(ORDER_API);
});

const PORT = 4000;

//check server listening
server.listen(PORT,() => {
	console.log(`Rest Server is ready on port ${PORT}`);
});