import { Component,OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  	selector: 'customer-card', 
  	templateUrl :'./customer-card.component.html' ,
  	styleUrls: ['./customer-card.component.scss']
})

export class CustomerCardComponent implements OnInit {

  	title = 'Order Management System';
    path = 'assets/images/';
    profilePicture:string = `${this.path}female.png`;

    customerAPI = 'http://localhost:5000/api/customers';
    customers:Array <any>;

    constructor(private customerService:CustomerService) {
  		  console.log("Inside Customers Card Constructor!");
        this.customers = this.customerService.fetchCustomerData(this.customerAPI);
 	  }

    ngOnInit(){
      console.log("Inside ngOnInit method!!");
    }

}
