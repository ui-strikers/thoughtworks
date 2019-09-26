var THOUGHTWORKS = (function (THOUGHTWORKS) {

	THOUGHTWORKS.Employee = function (id, designation, department, salary, officeAddress, uid, name, phone, email,projectname) {

//
//		THOUGHTWORKS.Address.call(this, houseno, street, society, city, state);
//		// call all property of address module

		THOUGHTWORKS.Person.call(this, uid, name, phone, email);
		// call all property of person module
		


		this.id = id;
		this.designation = designation;
		this.department = department;
		this.salary = salary;
		this.officeAddress = officeAddress;

	};

	var employeeDetails = new THOUGHTWORKS.Employee();

	//update email
	THOUGHTWORKS.Employee.prototype.updateEmail = function (email) {
		this.email = email;
	};

	return THOUGHTWORKS;
})(THOUGHTWORKS || {});