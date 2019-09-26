function Person(name,email,phone){
	this.name=name;
	this.email=email;
	this.phone=phone;
	this.info = function() {
		document.write(`Name: ${this.name}  Email: ${this.email} Phone: ${this.phone}` );
		document.write("<br/>");
		Person.prototype.localaddress();

	}
	this.updateEmail=function(updatedEmail){
		this.email=updatedEmail;
		document.write(`The updated email is ${this.email}`);
		document.write('<br/>');
	}
}

function Address(houseno,locality,streetname,city,pincode){
	this.houseno=houseno;
	this.locality=locality;
	this.streetname=streetname;
	this.city=city;
	this.pincode=pincode;
	this.localaddress = function(){

		document.write(`the Address is ${houseno}, ${locality} ${streetname} , ${city} ${pincode}`);
		document.write("<br/>");
	}
	/*this.officeaddress = function(){
		document.write(`the Address is ${houseno}, ${locality} ${streetname} , ${city} ${pincode}`);
             	document.write("<br/>");
		document.write("=========================");
             	document.write("<br/>");
             }*/
         }

         Person.prototype = new Address('11/74','sector 11','Shivaji nagar','Gurgaon','123445');


         function Employee(salary,design,dept){
         	this.salary=salary;
         	this.design=design;
         	this.dept=dept;
         	this.info= function(){
		             //Calling parent function
		             Employee.prototype.info();
		             document.write(`Salary: ${this.salary}  designation: ${this.design} Department: ${this.dept}` );
		             document.write("<br/>");
		             document.write("=========================");
		             document.write("<br/>");
		         }
		         this.updateSalary= function(updatedSalary){
		         	this.salary = this.salary + this.salary*updatedSalary;
		         	document.write(`the updated salary is ${this.salary}`);
		         	document.write("<br/>");
		         	document.write("=========================");
		         	document.write("<br/>");
		         }


		     }

                //inheriting parent class properties.
                Employee.prototype = new Person('Suchita','sushi@gmail.com','9575757583');

             // adding more prototype properties
             Employee.prototype.joinProject = function () {
             	var date = new Date();
             	document.write(`Employee joined project on ${date.getDate()} / ${date.getMonth()+1} / ${date.getYear()+1900}`);
             	document.write("<br/>");
             	document.write("=========================");
             	document.write("<br/>");
             };
             Employee.prototype.applyForLeave = function () {
             	var date = new Date();
             	document.write(`Employee applied leave on ${date.getDate()} , ${date.getMonth()+1}  ${date.getYear()+1900}`);
             	document.write("<br/>");
             	document.write("=========================");
             	document.write("<br/>");
             };

              //creating objects
              var employee = new Employee(80000,'Software Developer','IT');
              
              employee.info();
              employee.updateSalary(0.2);
              employee.updateEmail('suchita13m@gmail.com');
              employee.joinProject();
              employee.applyForLeave();
           //  officeaddress.officeaddress();