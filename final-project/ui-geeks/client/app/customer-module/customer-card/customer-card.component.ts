import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Address } from '../models/address';

@Component({
  	selector: 'app-customer', 
  	templateUrl :'./customer-card.component.html' ,
  	styleUrls: ['./customer-card.component.scss']
})

export class CustomerCardComponent implements OnInit {

  	title = 'Order Management System';

    path = 'assets/images/';
    profilePicture:string = `${this.path}female.png`;
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
