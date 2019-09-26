function Employee(id,name,salary,design,dept,email,phone) {
			this.id = id;
			this.name = name;
			this.salary = salary;
			this.design = design;
			this.dept = dept;
			this.email = email;
			this.phone = phone;

			this.info = function() {
				document.write("Employee Id of the Employee :" +id);
				document.write("<br/>");
				document.write("Employee Name of the Employee :"  +name);
				document.write("<br/>");
				document.write("Employee Salary of the Employee :"  +salary);
				document.write("<br/>");
				document.write("Employee Design of the Employee :"  +design);
				document.write("<br/>");
				document.write("Employee Department of the Employee :"  +dept);
				document.write("<br/>");
				document.write("Employee Email of the Employee :"  +email);
				document.write("<br/>");
				document.write("Employee Phone of the Employee :"  +phone);
				document.write("<br/>");
			}

            this.updateSalary = function (upateSal) {
				document.write("Employee  Current Salary of the Employee"  +this.salary);
				document.write("<br/>");
				document.write("Employee  Upate Salary of the Employee"  +upateSal);
				document.write("<br/>");
			}

            // Employee Update Email
			this.updateEmail = function (updatemail) {
				document.write("Employee  Current Salary of the Employee"  +this.email);
				document.write("<br/>");
				document.write("Employee  Upate Salary of the Employee"  +updatemail);
				document.write("<br/>");
			}

           // Employee  joindate
             this.joinProject = function (date) {
				
				document.write("Employee join date of the Employee"  +date);
				document.write("<br/>");
			}

			//Employee leave apply 
			this.leaveApply = function (date2) {
				
				document.write("Employee leave apply of the Employee :"  +date2);
				document.write("<br/>");
			}

			
		}

		var employee = new Employee(10,'manju',40000,'unique','computerscience','manju11csgmailcom',9685741474);
         employee.info(); 
         employee.updateSalary(50000);
         employee.updateEmail('manjune@gmail.com');
         employee.joinProject('10/9/2019');
         employee.leaveApply('10/9/2019');

          function Payroll(hra,da,ta,tds) {
                 this.hra = hra;
                 this.da = da;
                 this.ta = ta;
                 this.tds = tds;
                 this.totalSalary = function(){
                 	var pay = this.hra + this.da + this.ta + this.tds;
                 	document.write("total Salary :" +pay);
                 	console.log(pay);
                 }
          	
          }
            var payroll = new Payroll(3000,500,6000,400);
            payroll.totalSalary();
