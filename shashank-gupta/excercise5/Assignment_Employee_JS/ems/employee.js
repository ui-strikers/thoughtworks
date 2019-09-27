var TW = (function (TW) {
	
	TW.Employee = function (id,uid,name,salary,desig,dept,phone,email,homeAddress,officeAddress) {
		
		TW.Employee.prototype = new TW.Person(uid,name,phone,email,homeAddress);
	
		this.id = id;
		this.name = name;
		this.salary = salary;
		this.desig = desig;
		this.dept = dept;
		this.officeAddress = officeAddress;
	
		this.info = function () {
			TW.Employee.prototype.info(this);
			document.write(`<div class='emp_info'><div><label>ID : </label> <span>${this.id}</span></div>`);
			document.write(`<div><label>Salary : </label><span>${this.salary}</span> </div>`);
			document.write(`<div><label>Designation : </label> <span>${this.desig}</span></div>`);
			document.write(`<div><label>Department : </label> <span>${this.dept}</span></div>`);
			document.write(`<div class='off_adrs'><div class='office'><i class="fa fa-address-card-o"></i> <label>Office Address</label> <span>`);

			this.officeAddress.info();
			document.write(`</span></div></div></div>`);
		};

		this.updateSalary = function (incrementPercentage) {
			this.salary = this.salary + (this.salary * incrementPercentage);
			document.write(`<div class='emp_feature'><div><span>${this.name}: salary is increased to </span><label>${this.salary} !!</label></div>`);
		}			

		this.applyForLeave = function (days) {
			document.write(`<div> <span>${this.name}: applyed for </span><label>${days} leave, Granted!!</label></div>`);
		}			
	}; //Employee ends
	
	TW.Employee.prototype.updateEmail = function (email) {
		this.email = email;
		document.write(`<div> <span>${this.name}: email updated to </span><label>${this.email} </label></div>`);
	};

	TW.Employee.prototype.assignProject = function (projectName) {
		document.write(`<div> <span>${this.name}: has been assigned </span><label>${projectName} </label></div></div>`);
	}

	return TW;
})(TW || {});

