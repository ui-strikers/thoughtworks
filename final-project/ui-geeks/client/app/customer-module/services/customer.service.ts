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

	fetchCustomersData(url):any[]{
		console.log("Inside fetchServiceData");
		this.http.get<Customer[]>(url)
		.subscribe((res) => {
				console.log(res);
      			this.customersData = res;
              	return this.customersData;
				console.log("Subscribe method!!");
          });
	}

}