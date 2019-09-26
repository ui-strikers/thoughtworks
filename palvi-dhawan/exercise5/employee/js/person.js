var TWT = ( function (TWT) {

	TWT.Person = function (uid,name,email,phone,address) {

		this.uid = uid;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.address = address;

		this.info = function () {
			// document.write(`Person Uid: ${this.uid}`);
			// document.write(`<br/>`);
			// document.write(`Name: ${this.name}`);
			// document.write(`<br/>`);
			// document.write(`Email: ${this.email}`);
			// document.write(`<br/>`);
			// document.write(`Phone: ${this.phone}`);
			// document.write(`<br/>`);
			// document.write(` Home Address: `);
			address.info();
			// document.write(`<br/>`);

			document.getElementById('pid').textContent = this.uid;
			document.getElementById('pname').textContent = this.name;
			document.getElementById('pemail').textContent = this.email;
			document.getElementById('phone').textContent = this.phone;
			//document.getElementById('haddress').innerHTML = this.address.info();

		}
	}

	return TWT;

})(TWT || {});