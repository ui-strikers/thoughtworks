let app = require('express');
let bodyParser = require('body-parser');

let server= app();
server.use(bodyParser.json());

server.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', "http://localhost:4200");
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
})

const baseAPI = __dirname + '/data/';

const customerAPI = baseAPI + 'customers.json';

//read all the customers
server.get('/api/customers',function(req,res){
	console.log('Inside read all customers API call');
	res.status(200).sendFile(customerAPI);
});

const PORT = 5000;

//check server listening
server.listen(PORT,() => {
	console.log(`Rest Server is ready on port ${PORT}`);
});