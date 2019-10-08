import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Address } from '../models/address';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService {

	constructor(private http:HttpClient, 
				@Inject('CUSTOMERS_API') private CUSTOMERS_API:string,
				@Inject('NEW_CUSTOMERS_API') private NEW_CUSTOMERS_API:string
				) {
		console.log('Inside CustomerService constructor!!!');
	}

	//Making a call to beckend REST API to read customers data
	fetchCustomerData() : Observable<Customer[]> {
		console.log("Inside CustomerService fetchServiceData!!");
		return this.http.get<Customer[]>(this.CUSTOMERS_API);
	}

	insertCustomerData(data) {
		let headers = new HttpHeaders();
		headers.append('Content-Type', 'application/json');
		console.log("Inside CustomerService insertCustomerData!!");
		console.log(data);
		return this.http.post(this.NEW_CUSTOMERS_API, data);
	}

}