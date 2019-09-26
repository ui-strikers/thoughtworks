var TWT = (function (TWT) {
	
	TWT.payroll = {};

	TWT.payroll.title = 'Simple Salary Calculator';
	TWT.payroll.hra = function () {
			// document.write(`HRA : ${this.salary*.40}`);
			// document.write("<br />");

	};

	TWT.payroll.da = function () {
			// document.write(`DA : ${this.salary*.10}`);
			// document.write("<br />");
	};

	TWT.payroll.ta = function () {
			// document.write(`TA : ${this.salary*.08}`);
			// document.write("<br />");

			document.getElementById('hra').textContent = this.salary*.40;
			document.getElementById('da').textContent = this.salary*.10;
			document.getElementById('ta').textContent = this.salary*.08;

	};
	
	return TWT;
})(TWT || {});
