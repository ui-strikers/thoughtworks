// address  module using IIFE  
var THOUGHTWORKS = ( function(THOUGHTWORKS) {
	
	THOUGHTWORKS.Address = function (houseno,street,society,city,state){
		this.houseno = houseno;
		this.street = street;
		this.society = society;
		this.city = city;
		this.state = state;
	};
	
	return THOUGHTWORKS;
})(THOUGHTWORKS || {});