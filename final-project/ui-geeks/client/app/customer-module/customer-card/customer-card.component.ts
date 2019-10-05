import { Component,OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';
import { Address } from '../models/address';

@Component({
  	selector: 'customer-card', 
  	templateUrl :'./customer-card.component.html' ,
  	styleUrls: ['./customer-card.component.scss']
})

export class CustomerCardComponent implements OnInit {

    path = 'assets/images/';

    customers:Customer[];

    constructor(private customerService:CustomerService) {
  		  console.log("Inside Customers Card Constructor!");
 	  }

    ngOnInit() {
      console.log("Inside CustomerCardComponent ngOnInit!!");
      this.customerService.fetchCustomerData()
          .subscribe((customerList)=>{
              this.customers = customerList;
       });
    }

}
