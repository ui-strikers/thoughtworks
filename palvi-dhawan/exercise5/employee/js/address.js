var TWT = (function (TWT) {
	
	TWT.Address = function (houseNo,street,society,city,state) {
		this.houseNo = houseNo;
		this.street = street;
		this.society = society;
		this.city = city;
		this.state = state;
	
		this.info = function () {
			// document.write(`House No : ${this.houseNo}, Street : ${this.street}, Society : ${this.society}, City : ${this.city}, State : ${this.state}`);
			// document.write(`<br/>`);
			// document.write(`Street : ${this.street}`);
			// document.write(`<br/>`);
			// document.write(`Society : ${this.society}`);
			// document.write(`<br/>`);
			// document.write(`City : ${this.city}`);
			// document.write(`<br/>`);
			// document.write(`State : ${this.state}`);
			// document.write(`<br/>`);
		}			
	};

	return TWT;
})(TWT || {});
