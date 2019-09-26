function Payroll(hra,da,ta,tds,salary){
	this.hra=function (){
		var hra = salary*hra;
		document.write('The hra is '+hra);
	}
	this.da =function (){
		var da = salary*da;
		document.write('The da is '+da);
	}
	this.ta=function (){
		var ta = salary*ta;
		document.write('The ta is '+ta);
	}
	this.tds=function (){
		var tds = salary*tds;
		document.write('The ta is '+tds);
	}
	this.totalsalary=function (){
		var totalsalary =Math.floor(hra+da+ta+tds+salary);
		document.write('The total salary is '+totalsalary);
	}
}

var employee1salary = new Payroll(0.4,0.1,0.8,0.1,67000);

employee1salary.totalsalary();

