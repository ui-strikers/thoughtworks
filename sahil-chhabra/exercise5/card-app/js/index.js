var address = new THOUGHTWORKS.Address(217,"old fbd","dlf","fbd","hr")

//set value in arguments
	var employeeone = new THOUGHTWORKS.Employee('TW-101', 'Software Engineer', 'IT', 50000, address, 12011 - 13223, 'Sahil', 9136191860, 'sahilchhabra019@gmail.com');

	var employeesecond = new THOUGHTWORKS.Employee('TW-102', 'Software Engineer', 'IT', 60000, 'Sec 23', 111, 'sector:18', 'SRS', 'Faridabad', 'Haryana', 12231 - 17623, 'Pankaj', 3873374774, 'pankaj@gmail.com');

	

	//update email of employee
	employeeone.updateEmail('sahil@gmail.com');

	THOUGHTWORKS.payroll.hra.call(employeeone);
	THOUGHTWORKS.payroll.hra.call(employeesecond);


	THOUGHTWORKS.payroll.da.call(employeeone);
	THOUGHTWORKS.payroll.da.call(employeesecond);


	THOUGHTWORKS.payroll.ta.call(employeeone);
	THOUGHTWORKS.payroll.ta.call(employeesecond);




	// show all data of employee in html
	document.getElementById("card-odd").innerHTML = "<p>Name: <span>" + employeesecond.name + "</span></p><p>ID: <span>" + employeesecond.id + "</span></p><p>Contact: <span>" + employeesecond.phone + "</span></p><p>Department: <span>" + employeesecond.department + "</span></p><p>Designation: <span>" + employeesecond.designation + "</span></p><p>"+employeeone.officeAddress.state+"</p> <p>Email: <span>" + employeesecond.email + "</span></p><p>Salary: <span>" + employeesecond.salary + "</span></p>";

	document.getElementById("card-even").innerHTML = "<p>Name: <span>" + employeeone.name + "</span></p><p>ID: <span>" + employeeone.id + "</span></p><p>Contact: <span>" + employeeone.phone + "</span></p><p>Department: <span>" + employeeone.department + "</span></p><p>Designation: <span>" + employeeone.designation + "</span></p> <p>Email: <span>" + employeeone.email + "</span></p><p>Salary: <span>" + employeeone.salary + "</span></p>";