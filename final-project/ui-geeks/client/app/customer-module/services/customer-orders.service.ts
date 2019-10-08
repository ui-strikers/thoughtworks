import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../../order-module/models/order';
import { Product } from '../../order-module/models/product';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerOrdersService {

	constructor(private http:HttpClient, @Inject('ORDER_FULFILL_STATUS_API') private ORDER_FULFILL_STATUS_API:string) {
		console.log('Inside CustomerService constructor!!!');
	}

	//Making a call to beckend REST API to read customers data
	fetchProductsData(id) : Observable<Order[]> {
		debugger;
		let JOIN_CUSTOMER_ORDER_API = this.ORDER_FULFILL_STATUS_API;
		console.log("Inside CustomerService fetchServiceData!!");
		return this.http.get<Order[]>(JOIN_CUSTOMER_ORDER_API);
	}

}