import { Component,OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';
import { Address } from '../models/address';

@Component({
  	selector: 'customer-list', 
  	templateUrl :'./customer-list.component.html' ,
  	styleUrls: ['./customer-list.component.scss']
})

export class CustomerListComponent implements OnInit {

  	customers:Customer[];

   	constructor(private customerService:CustomerService){
    		console.log("Inside Customers List Constructor!");
   	}

    ngOnInit(){
        console.log("Inside CustomerListComponent ngOnInit!!");
        this.customerService.fetchCustomerData()
            .subscribe((customerList)=>{
                this.customers = customerList;
         });
    }

}
