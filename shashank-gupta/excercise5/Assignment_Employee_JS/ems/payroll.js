var TW = (function (TW) {
	
	TW.payroll = {};

	TW.payroll.title = 'Simple Salary Calculator';
	TW.payroll.hra = function () {
			document.write(`<div class='emp_info'><label>HRA : </label> <span>${this.salary*.40}</span></div>`);
	};

	TW.payroll.da = function () {
			document.write(`<div class='emp_info'><label>DA : </label> <span>${this.salary*.10}</span></div>`);
	};

	TW.payroll.ta = function () {
		document.write(`<div class='emp_info'><label>TA : </label> <span>${this.salary*.80}</span></div>`);
	};
	
	return TW;
})(TW || {});

