var TW = (function (TW) {
	
	TW.Person = function (uid,name,phone,email,address) {

		//TW.Person.prototype = new TW.Employee(id,uid,name,salary,desig,dept,phone,email,homeAddress,officeAddress);

		this.uid = uid;
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.address = address;
	
		this.info = function () {
			
			//TW.Employee.prototype
			//TW.Person.prototype = new TW.Employee.prototype();
			//TW.Person.prototype.info.call(this);
			
			document.write(`<div class='card'><div class='emp_info'><div><label>UID: </label><span>${this.uid}</span></div>`);
			document.write(`<div class='chip'><img src='img/img_avatar.png' alt='Person'><label>Name: </label><span>${this.name}</span> </div>`);
			document.write(`<div><i class="fa fa-phone"></i> <label>Phone: </label><span> ${this.phone}</span></div>`);
			document.write(`<div><i class="fa fa-envelope"></i> <label>Email: </label><span> ${this.email}</span></div>`);
			document.write(`<div><i class="fa fa-address-card-o"></i> <label>Home Address: </label><span>${address.info}</span></div></div>`);
			//this.address;
			//this.homeAddress;
			//this.address.info();
		}			
	};
	return TW;
})(TW || {});

