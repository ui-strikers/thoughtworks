import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable()
export class OrderService {

	constructor(private http:HttpClient, 
				@Inject('ORDERS_API') private ORDERS_API:string,
				@Inject('ORDER_PAY_STATUS_API') private ORDER_PAY_STATUS_API:string,
				@Inject('ORDER_FULFILL_STATUS_API') private ORDER_FULFILL_STATUS_API:string
				) {
		console.log('Inside OrderService constructor!!!');
	}
	
	//Making a call to beckend REST API to read orders data of payment status
	fetchPayData(status) : Observable<Order[]> {
		let PAY_STATUS_API = this.ORDER_PAY_STATUS_API + status;
		console.log("Inside OrderService fetchPayData!!");
		return this.http.get<Order[]>(PAY_STATUS_API);
	}

	//Making a call to beckend REST API to read orders data of fulfillment status
	fetchFulfillData(status) : Observable<Order[]> {
		let FULFILL_STATUS_API = this.ORDER_FULFILL_STATUS_API + status;
		console.log("Inside OrderService fetchPayData!!");
		return this.http.get<Order[]>(FULFILL_STATUS_API);
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