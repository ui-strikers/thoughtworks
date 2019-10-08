import { Component } from '@angular/core';
import { Newcustomer } from '../models/newCustomer';
import { NgForm } from "@angular/forms";
import { from } from 'rxjs';

@Component({
    selector: 'new-customer',
    templateUrl: './new-customer.component.html',
    styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent {
    [x: string]: any;
    title:string = "New customer ";
    customerIcon='../../../assets/images';

    states:['Bihar','Delhi','Punjab','Hariyana'];

    constructor() {
        console.log("inside customer form constructor");
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
			console.error("Error saving New customers!");
			return false;
		}
	);

	}
}


