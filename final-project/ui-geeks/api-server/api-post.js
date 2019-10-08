let app = require('express');
let bodyParser = require('body-parser');
let fs = require('fs');

let server= app();
server.use(bodyParser.json());

server.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', "http://localhost:4200");
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});


//handling form post data
server.post('/api/customers', function (req, res) {
	const customersDataFile = __dirname+'/data/customers.json';
	let customerArray = fs.readFileSync(customersDataFile,'utf-8');
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
	fs.writeFileSync(customersDataFile,  JSON.stringify(json));
});

const PORT = 4700;

//check server listening
server.listen(PORT,() => {
	console.log(`Rest Server is ready on port ${PORT}`);
});