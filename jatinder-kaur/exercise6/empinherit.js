	Object.prototype.company = function() {
		return "Welcome to Thought Works!!!";
	};

	Object.prototype.updateEmail = function(updemail){
		this.email = updemail;
		document.write(" Updated Email of " + this.name + " with id " + this.id + " is " + this.email);
		document.write("<br/>")
	};


	function Person(name, email, phone){
		this.id = 1;
		this.name = name;
		this.email = email;
		this.phone = phone;

	this.info = function(){
		document.write("ID:" + this.id);
		document.write("<br/>");
		document.write("Name:" + this.name);
		document.write("<br/>");
		document.write("Email:" + this.email);
		document.write("<br/>");
		document.write("Phone:" + this.phone);
		document.write("<br/>");
	};
	// this.updateEmail = function(updemail){
	// 	this.email = updemail;
	// 	document.write(" Updated Email of " + this.name + " with id " + this.id + " is " + this.email);
	// 	document.write("<br/>")
	// };
}

Person.prototype.homeadd = function (){
		this.hNo = 32;
		this.street = 2;
		this.colony = "Punjabi Bagh";
		this.city = "Patiala";
		this.state = "Punjab";
		document.write(`Home address is ${this.hNo} ${this.street} ${this.colony} ${this.city} ${this.state}`);
		document.write("<br/>")
	};

function Employee()
{
	this.id = 10;
	this.telNo = 5002300;
	this.salary = 20000;
	this.desig = "CEO";
	this.dept = "IT";
	this.info = function(){
		Employee.prototype.info.call(this);
		document.write("Tel No:" + this.name);
		document.write("<br/>");
		document.write("Salary:" + this.salary);
		document.write("<br/>");
		document.write("desig:" + this.desig);
		document.write("<br/>");
		document.write("Department:" + this.dept);
		document.write("<br/>");
	};
	this.updateSalary = function(per){
		this.salary= this.salary + (this.salary*per)/100;
		document.write("salary is" + this.salary);
		document.write("<br/>")
	};
}

Employee.prototype = new Person("Ajay", "abc@gmail.com", 98752365);
Employee.prototype.joinProject = function(){
		document.write(this.name + " with id " + this.id + "has joined a project");
		document.write("<br/>")
	};

Employee.prototype.offcadd = function (){
		this.sco = 320;
		this.street = 5;
		this.colony = "DLF";
		this.city = "Gurgaon";
		this.state = "Haryana";
		document.write(`Office address is ${this.sco} ${this.street} ${this.colony} ${this.city} ${this.state}`);
		document.write("<br/>");
	};

var employee = new Employee();
Employee.prototype.constructor = 'Employee'

console.log(employee.id);
console.log(employee.constructor);
employee.info();

console.log(employee.id);

employee.updateSalary(45);

employee.homeadd();
employee.offcadd();
employee.joinProject();
// employee.offcadd();
console.log(employee.company());
employee.updateEmail("xyz@gmail.com");

document.write("===========================");
document.write("<br/>");
employee.info();