var THOUGHTWORKS = (function (THOUGHTWORKS) {
	
	THOUGHTWORKS.payroll = {};

	THOUGHTWORKS.payroll.title = 'Simple Salary Calculator';
	THOUGHTWORKS.payroll.hra = function () {
	(`${this.salary*.40}`);
	
	};

	THOUGHTWORKS.payroll.da = function () {
		(`${this.salary*.10}`);

	};

	THOUGHTWORKS.payroll.ta = function () {
(`${this.salary*.08}`);

	};
	
	return THOUGHTWORKS;
})(THOUGHTWORKS || {});

