	var employee = {id :"0024521", 
					name :"Sayali Annadate", 
					salary :"450000", 
					designation: "Software Engineer", 
					department : "IT",  
					eMail: "sayali.annadate@gmail.com" , 
					phone : "9702858785"
					};
	var salaryDetails = { hra : 0.4* employee.salary , da:0.1* employee.salary, ta:0.08* employee.salary, tds:0.1* employee.salary, salaryRem: 0.32* employee.salary };

					
	
function employeeInfo()
{		
	document.getElementById("info").innerHTML = "Id: " + employee.id + "<br>" + "Name: " + employee.name + "<br>" + "Salary: " +employee.salary + "<br>"
												+"Designation: " +employee.designation + "<br>" + "Department: " + employee.department + "<br>"
												+"Email ID: " + employee.eMail + "<br>" + "Mobile: " + employee.phone;
												
	document.getElementById("salary").innerHTML	= "HRA: " + salaryDetails.hra + "<br>" + "DA : " +salaryDetails.da + "<br>" + "TA: " + 	salaryDetails.ta
												  + "<br>" + "TDS: " +	salaryDetails.tds  +  "<br>" + "Remaining: " +	salaryDetails.salaryRem
												  + "<br>" + "Total: " +	employee.salary; 												  
	
}

function updateSalary()
{	
	var salary = prompt ("Enter new salary");
	
	employee.salary = salary;
	
}
function updateEmail()
{	
	var newId = prompt ("Enter new emailID");
	employee.eMail = newId;
	
}

