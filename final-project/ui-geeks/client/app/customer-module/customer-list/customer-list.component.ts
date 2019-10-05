import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Address } from '../models/address';

@Component({
  	selector: 'customer-list', 
  	templateUrl :'./customer-list.component.html' ,
  	styleUrls: ['./customer-list.component.scss']
})

export class CustomerListComponent implements OnInit {

  	title = 'Order Management System';

    customersApiUrl = 'http://localhost:5000/api/customers';
  	customers:Customer[];

   	constructor(private http:HttpClient){
    		console.log("Inside Customers List Constructor!");
   	}

    ngOnInit(){
        console.log("Inside ngOnInit method!!");
        this.http.get<Customer[]>(this.customersApiUrl)
            .subscribe((res) => {
                this.customers = res;
            });
    }

}
