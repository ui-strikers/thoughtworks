let app = require('express');
let bodyParser = require('body-parser');
let data = require('./data/orders.json');

let server= app();
server.use(bodyParser.json());

server.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', "http://localhost:4200");
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
})

// read all the orders payment status wise
server.get('/api/orders/:pay', (req,res) => {
	console.log('Inside read order API call');
	let payStatus = req.params.pay;
	let filterArray = [];
	for(var idx in data){
		if(data[idx].payStatus == payStatus){
			filterArray.push(data[idx]);
		}
	}
	res.send(filterArray);
});

const PORT = 4800;

//check server listening
server.listen(PORT,() => {
	console.log(`Rest Server is ready on port ${PORT}`);
});