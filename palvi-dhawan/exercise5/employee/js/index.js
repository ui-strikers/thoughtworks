var TWT = (function (TWT) {

	    	var empData = [
			{
				empId:'make1',pId:'x1',eName:'2009',salary:'10000',desig:'white',dept:'10',phone:'8990899089',email:'abc@gmail.com',
				homeAddress:{
					hNo:81,
					street:'MG Road',
					colony:'Vatika City',
					city:'Gurguram',
					state:'HR'
				},
				OfficeAddress:{
					hNo:81,
					street:'MG Road',
					colony:'Vatika City',
					city:'Gurguram',
					state:'HR'
				}			
			},
			{
				empId:'make2',pId:'x1',eName:'2009',salary:'10000',desig:'white',dept:'10',phone:'8990899089',email:'abc@gmail.com',
				homeAddress:{
					hNo:81,
					street:'MG Road',
					colony:'Vatika City',
					city:'Gurguram',
					state:'HR'
				},
				OfficeAddress:{
					hNo:81,
					street:'MG Road',
					colony:'Vatika City',
					city:'Gurguram',
					state:'HR'
				}			
			},
			{
				empId:'make3',pId:'x1',eName:'2009',salary:'10000',desig:'white',dept:'10',phone:'8990899089',email:'abc@gmail.com',
				homeAddress:{
					hNo:81,
					street:'MG Road',
					colony:'Vatika City',
					city:'Gurguram',
					state:'HR'
				},
				OfficeAddress:{
					hNo:81,
					street:'MG Road',
					colony:'Vatika City',
					city:'Gurguram',
					state:'HR'
				}			
			},						
					
                    ]
 
	var home = new TWT.Address(81,'MG Road','Vatika City','Gurguram','HR');
	var office = new TWT.Address(211,'Sohana Road','JMD Megapolis','Gurguram','HR');


	var e1 = new TWT.Employee('1000-1234',101,'Palvi Dhawan',7800000,'SE','SW',8990899089,'abc@gmail.com',home,office);
	e1.info();
	e1.updateSalary(.100);
	e1.applyForLeave(2);
	TWT.payroll.hra.call(e1);
	TWT.payroll.da.call(e1);
	TWT.payroll.ta.call(e1);
	return TWT;

})(TWT || {});