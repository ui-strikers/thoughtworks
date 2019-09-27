function Employee(id,name,salary,desig,dept,email,phone) {
	// body...
	this.id = id;
	this.name = name;
	this.salary = salary;
	this.desig = desig;
	this.dept = dept;
	this.email = email;
	this.phone = phone;

	
	this.updateSalary = function() {
		this.salary = this.salary*2;
		document.write("Employee Updated Salary: "+this.salary);
	};

	function Payroll(hra,da,ta,tds,total_salary) {
	this.hra = hra;
	this.da = da;
	this.ta = ta;
	this.tds = tds;
	this.total_salary = total_salary;

	this.hra = function () {
		this.hra = (this.total_salary) - (this.total_salary * 0.2)
		document.write("hra : "+this.hra);
	};

	this.da = function () {
		this.hra = (this.total_salary) - (this.total_salary * 0.1)
		document.write("da : "+this.hra);
	};

	this.ta = function () {
		this.hra = (this.total_salary) - (this.total_salary * 0.05)
		document.write("ta : "+this.hra);
	};

	this.tds = function () {
		this.hra = (this.total_salary) - (this.total_salary * 0.15)
		document.write("tds : "+this.hra);
	}

}

	this.info = function() {

		document.write("Employee id is:"+employee.id);
		document.write("<br/>");
		document.write("Employee name is:"+employee.name);
		document.write("<br/>");
		document.write("Employee Salary is:"+employee.salary);
		document.write("<br/>");
		document.write("Employee Designation is:"+employee.desig);
		document.write("<br/>");
		document.write("Employee Department is:"+employee.dept);
		document.write("<br/>");
		document.write("Employee Email is:"+employee.email);
		document.write("<br/>");
		document.write("Employee Phone is:"+employee.phone);
		document.write("<br/>");
	}

}

var employee = new Employee(1,'Yamini','40000','UI Developer','IT','y@gamil.com','9930932550');

employee.info();
employee.updateSalary();

document.write("<br/>");
document.write("<br/>");

// function Payroll(hra,da,ta,tds,total_salary) {
// 	this.hra = hra;
// 	this.da = da;
// 	this.ta = ta;
// 	this.tds = tds;
// 	this.total_salary = total_salary;

// 	this.hra = function () {
// 		this.hra = (this.total_salary) - (this.total_salary * 0.2)
// 		document.write("hra : "+this.hra);
// 	};

// 	this.da = function () {
// 		this.hra = (this.total_salary) - (this.total_salary * 0.1)
// 		document.write("da : "+this.hra);
// 	};

// 	this.ta = function () {
// 		this.hra = (this.total_salary) - (this.total_salary * 0.05)
// 		document.write("ta : "+this.hra);
// 	};

// 	this.tds = function () {
// 		this.hra = (this.total_salary) - (this.total_salary * 0.15)
// 		document.write("tds : "+this.hra);
// 	}

// }

// var payroll = new Payroll('20%','10%','5%','15%','80000');

// payroll.hra();
// document.write("<br/>");
// payroll.da();
// document.write("<br/>");
// payroll.ta();
// document.write("<br/>");
// payroll.tds();
// document.write("<br/>");
// document.write("Total Salary: "+payroll.total_salary);
