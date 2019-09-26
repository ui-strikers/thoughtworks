var TW = (function (TW) {

	TW.Address = function (houseNo, street, society, city, state) {
		this.houseNo = houseNo;
		this.street = street;
		this.society = society;
		this.city = city;
		this.state = state;

		this.info = function () {

			document.write(`<div class='addrs'><div><label>House No : </label> <span>${this.houseNo}</span></div>`);
			document.write(`<div><label>Street : </label><span>${this.street}</span> </div>`);
			document.write(`<div><label>Society : </label> <span>${this.society}</span></div>`);
			document.write(`<div><label>City : </label> <span>${this.city}</span></div>`);
			document.write(`<div><label>State : </label> <span>${this.state}</span></div></div></div>`);
		}
	};
	return TW;
})(TW || {});

