import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Address } from '../models/address';

@Injectable()
export class CustomerService {

  	customersData:Customer[];

	constructor(private http:HttpClient) {
		console.log('Inside CustomerService constructor()!!!');
	}

	fetchCustomerData(url):Array <any>{
		console.log("Inside fetchServiceData");
		this.http.get<Customer[]>(url)
		.subscribe((res) => {
				console.log(res);
              	return res;
          });
	}

}