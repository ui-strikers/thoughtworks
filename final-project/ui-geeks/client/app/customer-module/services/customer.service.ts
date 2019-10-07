import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Address } from '../models/address';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService {

	constructor(private http:HttpClient, @Inject('customerAPI') private customerAPI:string) {
		console.log('Inside CustomerService constructor!!!');
	}

	//Making a call to beckend REST API to read customers data
	fetchCustomerData() : Observable<Customer[]> {
		console.log("Inside CustomerService fetchServiceData!!");
		return this.http.get<Customer[]>(this.customerAPI);
	}

}