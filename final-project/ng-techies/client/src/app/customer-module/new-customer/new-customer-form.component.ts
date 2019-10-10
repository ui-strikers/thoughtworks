import { Component } from "@angular/core";
import {Customer} from '../models/customer';
import {CustomerService} from '../services/customer.service';

@Component({
	selector: 'new-customer-form',
	templateUrl: '.\customer-form.component.html',
	styleUrls: ['./new-customer-form.component.css']
})
export class NewCustomerFormComponent {
	customers: Customer[];
	// customer: Customer = {
	// 	firstName: '',
	// 	lastName: '',
	// 	gender: '',
	// 	email: '',
	// 	phone: '',
	// 	address: {
	// 	 // houseNo: '',
	// 	  street: '',
	// 	  society: '',
	// 	  city: '',
	// 	  state: '',
	// 	  country: ''
	// 	}
	//   };
	firstName: string = 'Thought';
	lastName: string = 'Works';
	message: string;

	formSubmitted(data) {
		this.message = JSON.stringify(data);
	}
}
