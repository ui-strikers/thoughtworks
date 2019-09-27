var TW = (function (TW) {
	
	TW.Employee = function (id,uid,name,salary,desig,dept,phone,email,homeAddress,officeAddress) {
		
		TW.Employee.prototype = new TW.Person(uid,name,phone,email,homeAddress);		
		this.uid=uid;
		this.name=name;
		this.phone=phone;
		this.email=email;
		this.homeAddress=homeAddress;
		this.id = id;
		this.salary = salary;
		this.desig = desig;
		this.dept = dept;
		this.officeAddress = officeAddress;
		
		this.info = function () {
			var node = document.getElementsByClassName('card')[0];
			var section = document.createElement('section');
			node.appendChild(section);
			section.style.width='28%';
			section.style.height='290px';
			section.style.display='block';
			section.style.margin='20px';
			section.style.float='left';
			section.style.backgroundColor='#154360';
			section.style.border='1px solid black';
			section.style.borderRadius='30px';
			section.style.boxShadow='10px 10px 12px #154360';
			var header = document.createElement('header');
			section.appendChild(header);
			var h1 = document.createElement('h1');
			header.appendChild(h1);
			h1.style.textAlign='center';
			h1.style.color='white';
			var heading = document.createTextNode('VISITING CARD');
			h1.appendChild(heading);
			var hr = document.createElement('hr');
			section.appendChild(hr);
			hr.style.color='white';
			TW.Employee.prototype.info.call(this);
			section.appendChild(person_div);
			document.write(`ID : ${this.id}`);
			document.write(`<br/>`);
			document.write(`Salary : ${this.salary}`);
			document.write(`<br/>`);
			document.write(`Desig : ${this.desig}`);
			document.write(`<br/>`);
			document.write(`Dept : ${this.dept}`);
			document.write(`<br/>`);
			document.write(`Office Address`);
			document.write(`<br/>`);
			this.officeAddress.info();
			document.write(`==========================================`);
			document.write(`<br/>`);
		};

		this.updateSalary = function (incrementPercentage) {
			this.salary = this.salary + (this.salary * incrementPercentage);
			document.write(`${this.name} salary is increased to ${this.salary}!!`);
			document.write(`<br/>`);
		}			

		this.applyForLeave = function (days) {
			document.write(`${this.name} applyed for ${days} leave, Granted!!`);
			document.write(`<br/>`);
		}			
	}; //Employee ends
	
	TW.Employee.prototype.updateEmail = function (email) {
		this.email = email;
		document.write(`${this.name} email updated to ${this.email}!!`);
		document.write(`<br/>`);
	};

	TW.Employee.prototype.assignProject = function (projectName) {
		document.write(`${this.name} has been assigned ${projectName} project!!`);
		document.write(`<br/>`);
	}

	return TW;
})(TW || {});

