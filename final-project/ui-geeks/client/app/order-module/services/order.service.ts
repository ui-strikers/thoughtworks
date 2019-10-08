import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable()
export class OrderService {

	constructor(private http:HttpClient, @Inject('ORDERS_API') private ORDERS_API:string) {
		console.log('Inside OrderService constructor!!!');
	}

	//Making a call to beckend REST API to read customers data
	fetchOrderData() : Observable<Order[]> {
		console.log("Inside OrderService fetchOrderData!!");
		return this.http.get<Order[]>(this.ORDERS_API);
	}

	fetchOrderTotal(order){
        let product = 0;
		for(let products of order.products){
          product += products.orderPrice;
        }
        return product;
	}

}