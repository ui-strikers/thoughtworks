
	function Employee(id,name,salary,desig,dept,email,phone,){
	this.id=id;
	this.name=name;
	this.salary=salary;
	this.desig=desig;
	this.dept=dept;
	this.email=email;
	this.phone=phone;


	this.info = function() {
		document.write("ID : "+this.id);
		document.write("<br/>");
		document.write("Name : "+this.name);
		document.write("<br/>");
		document.write("Salary : "+this.salary);
		document.write("<br/>");
		document.write("Desgination : "+this.desig);
		document.write("<br/>");
		document.write("Department : "+this.dept);
		document.write("<br/>");
		document.write("Email : "+this.email);
		document.write("<br/>");
		document.write("Phone: "+this.phone);
		document.write("<br/>");
		document.write("<br/>");
	}
		
	this.updateSalary = function (salary) {
		this.salary = salary;
	}

	this.updateEmail = function (email) {
		this.email = email;
	}
	
	this.getPayroll = function () {
		document.write("------------------ Employee Payroll Details ------------------<br>");
		document.write("HRA: " + (this.salary * 0.4))
		document.write("<br/>");
		document.write("DA: " + (this.salary * 0.1))
		document.write("<br/>");
		document.write("TA: " + (this.salary * 0.08))
		document.write("<br/>");
		document.write("TDS: " + (this.salary * 0.1))
		document.write("<br/>");
		document.write("Total Salary: " + (this.salary))
	}
}
  
   var employee = new Employee(1,'priya',20000 ,"UI Developer", "IT", "priya@gmail.com"
   							   , 9876654322);
	document.write("------------ Employee Details (Before Updation) -------------<br>");
	employee.info();
	employee.updateSalary(30000);
	employee.updateEmail("priyagupta@gmail.com");
   // employee.salary = 30000;
   employee.email = "priyagupta@gmail.com";
   document.write("------------ Employee Details (After Updation) -------------<br>");
   employee.info();
   employee.getPayroll();

