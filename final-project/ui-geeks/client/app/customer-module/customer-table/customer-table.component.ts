import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Address } from '../models/Address';


@Component({
    selector:'customer-table',
    templateUrl:'./customer-table.component.html',
    styleUrls:['./customer-table.component.scss']
})

export class CustomerTableComponent implements OnInit {

    title:string='Customers Tabular Data';

    customerApiUrl = 'http://localhost:5000/api/customers';
    path = 'assets/images/';
    profilePicture:string = `${this.path}female.png`;

    customers:Customer[];

    constructor(private http:HttpClient){
        console.log('inside customer table constructor');
    }

    ngOnInit(){
        this.http.get<Customer[]>(this.customerApiUrl).subscribe((res)=>{
          this.customers=res;
        })
    }

}