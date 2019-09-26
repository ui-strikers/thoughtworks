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
			debugger;

			//TW.Employee.prototype.info.call(this);

			//Creating Visiting Card
			var main = document.getElementsByTagName('main')[0]; //Searching for the main node
			var sect = document.createElement('section'); //Create section node in main
			sect.setAttribute('class','v-card'); //Add attribute named 'class'
			main.appendChild(sect); // Append the section in main node

			//Creating Front View of Visiting Card
			var frontView=document.createElement('div');
			frontView.setAttribute('class','front-view');
			sect.appendChild(frontView);

			//Adding info inside front view of visiting card
			var frontInfo=document.createElement('div');
			frontInfo.setAttribute('class','info');
			frontView.appendChild(frontInfo);	

			//Add Name Element
			var personName=document.createElement('h3');
			frontInfo.appendChild(personName);						

			//Add Name
			var personNameText=document.createTextNode(`${this.name}`);
			personName .appendChild(personNameText);	

			//Add Designation Element
			var desig=document.createElement('small');
			personName.appendChild(desig);	

			//Add Designation
			var desigText=document.createTextNode(` (${this.desig})`);
			desig.appendChild(desigText);	

			//Add Line
			var line=document.createElement('hr');
			frontInfo.appendChild(line);	

			//Add Phone Number Element
			var phNumber=document.createElement('h4');
			frontInfo.appendChild(phNumber);

			//Add Name
			var phNumberText=document.createTextNode(`Phone Number : ${this.phone}`);
			phNumber .appendChild(phNumberText);

			//Add Phone Number Element
			var emailId=document.createElement('h4');
			frontInfo.appendChild(emailId);

			//Add Name
			var emailIdText=document.createTextNode(`Email Id : ${this.email}`);
			emailId .appendChild(emailIdText);

			//Add Phone Number Element
			var homeAddr=document.createElement('h4');
			frontInfo.appendChild(homeAddr);

			//Add Name
			var homeAddrText=document.createTextNode(`Address : ${TW.Employee.prototype.address}`);
			homeAddr.appendChild(homeAddrText);	

			//Creating Back View of Visiting Card
			var backView=document.createElement('div');
			backView.setAttribute('class','back-view');
			sect.appendChild(backView);

			//Add Element
			var deptName=document.createElement('h2');
			backView.appendChild(deptName);

			//Add Element text
			var deptNameText=document.createTextNode(`${this.dept}`);
			deptName.appendChild(deptNameText);

			//Add Element
			var officeAddr=document.createElement('p');
			backView.appendChild(officeAddr);

			//Add Element text
			var officeAddrText=document.createTextNode(`${this.officeAddress.info()}`);
			officeAddr.appendChild(officeAddrText);

			// TW.Employee.prototype.info.call(this);
			// document.write(`ID : ${this.id}`);
			// document.write(`<br/>`);
			// document.write(`Salary : ${this.salary}`);
			// document.write(`<br/>`);
			// document.write(`Desig : ${this.desig}`);
			// document.write(`<br/>`);
			// document.write(`Dept : ${this.dept}`);
			// document.write(`<br/>`);
			// document.write(`Office Address`);
			// document.write(`<br/>`);
			// this.officeAddress.info();
			// document.write(`==========================================`);
			// document.write(`<br/>`);
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

