import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable()
export class OrderService {

	constructor(private http:HttpClient, @Inject('orderAPI') private orderAPI:string) {
		console.log('Inside OrderService constructor!!!');
	}

	//Making a call to beckend REST API to read customers data
	fetchOrderData() : Observable<Order[]> {
		console.log("Inside OrderService fetchOrderData!!");
		return this.http.get<Order[]>(this.orderAPI);
	}
}