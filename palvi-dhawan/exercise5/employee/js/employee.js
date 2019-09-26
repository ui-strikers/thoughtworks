var TWT = (function (TWT) {
		
	TWT.Employee = function (eid,uid,name,salary,desig,dept,phone,email,homeAddress,officeAddress) {
		
	TWT.Employee.prototype = new TWT.Person(uid,name,email,phone,homeAddress);
		this.uid = uid;
		this.eid = eid;
		this.salary = salary;
		this.desig = desig;
		this.dept = dept;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.homeAddress = homeAddress;
		this.officeAddress = officeAddress;
	
		this.info = function () {
			TWT.Employee.prototype.info.call(this); 
			// document.write(`Employee Id : ${this.eid}`);
			// document.write(`<br/>`);
			// document.write(`Salary : ${this.salary}`);
			// document.write(`<br/>`);
			// document.write(`Desig : ${this.desig}`);
			// document.write(`<br/>`);
			// document.write(`Dept : ${this.dept}`);
			// document.write(`<br/>`);
			// document.write(`Office Address`);
			// document.write(`<br/>`);
			this.officeAddress.info();
			
			// document.write(`<br/>`);
		};

		this.updateSalary = function (incrementPercentage) {
		this.salary = this.salary + (this.salary * incrementPercentage);
		//document.write(`${this.name} salary is increased to ${this.salary}!!`);
		//document.write(`<br/>`);
		}			

		this.applyForLeave = function (days) {
		// document.write(`${this.name} applied for ${days} leave, Granted!!`);
		// document.write(`<br/>`);
		}	

			document.getElementById('eid').textContent = this.eid;
			document.getElementById('salary').textContent = this.salary;
			document.getElementById('desig').textContent = this.desig;
			document.getElementById('dept').textContent = this.dept;
			document.getElementById('updateSalary').textContent = this.dept;

	};

	TWT.Employee.prototype.updateEmail = function (email) {
	this.email = email;
	//document.write(`${this.name} email updated to ${this.email}!!`);
	//document.write(`<br/>`);
		//document.getElementById('updateSalary').textContent = this.email;
	};

	TWT.Employee.prototype.assignProject = function (projectName) {
	// document.write(`${this.name} has been assigned ${projectName} project!!`);
	// document.write(`<br/>`);
	this.projectName = projectName;
	//document.getElementById('projectName').textContent = this.projectName;
	}


	return TWT;

	
})(TWT || {});

