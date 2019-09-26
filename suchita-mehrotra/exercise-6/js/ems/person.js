var TW = (function (TW) {
	
	TW.Person = function (uid,name,phone,email,address) {

		this.uid = uid;
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.address = address;
	
		this.info = function () {
			person_div = document.createElement('div');
			var span1 = document.createElement('span1');
			person_div.appendChild(span1);
			var span2 = document.createElement('span2');
			person_div.appendChild(span2);
			var span3 = document.createElement('span3');
			person_div.appendChild(span3);
			var span4 = document.createElement('span4');
			person_div.appendChild(span4);
			var uid =document.createTextNode(`UID  ${this.uid}`);
			span1.appendChild(uid);
			span1.style.color='white';
			var br1 = document.createElement('br');
			span1.appendChild(br1);
			var name =document.createTextNode(`Name  ${this.name}`);
			span2.appendChild(name);
				span2.style.color='white';
				var br2 = document.createElement('br');
			span2.appendChild(br2);
			var phone =document.createTextNode(`Phone  ${this.phone}`);
			span3.appendChild(phone);
				span3.style.color='white';
				var br3 = document.createElement('br');
			span3.appendChild(br3);
			var email =document.createTextNode(`Email  ${this.email}`);
			span4.appendChild(email);
				span4.style.color='white';
			var br4 = document.createElement('br');
			span4.appendChild(br4);	
			/*document.write(`UID : ${this.uid}`);
			document.write(`<br/>`);
			document.write(`Name : ${this.name}`);
			document.write(`<br/>`);
			document.write(`Phone : ${this.phone}`);
			document.write(`<br/>`);
			document.write(`Email : ${this.email}`);
			document.write(`<br/>`);
			document.write(`Home Address`);
			document.write(`<br/>`);
			address.info */		}			
	};

	return TW;
})(TW || {});
