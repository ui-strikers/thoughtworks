import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CustomerService } from '../../services/customer.service';

@Component({
	selector: 'customer-form', 
	templateUrl :'./customer-form.component.html',
	styleUrls: ['./customer-form.component.scss']
})

export class CustomerFormComponent {

	title:string = 'New Customer Registration';  
	message:string;	

	constructor(private customerService:CustomerService) {
		console.log("Inside Customers Form Constructor!");
	}
	formSubmitted(data) {
		console.log(data);
		this.customerService.insertCustomerData(data).subscribe(
		data => {
			console.log(data);
			return true;
		},
		error => {
			console.log(error);
			console.error("Error saving customers!");
			return false;
		}
	);

	}
}
