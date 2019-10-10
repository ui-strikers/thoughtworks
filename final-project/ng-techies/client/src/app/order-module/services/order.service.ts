import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';

import { 
    ORDER_API_URL, 
    ORDER_PAID_STATUS_API_URL, 
    ORDER_UNPAID_STATUS_API_URL,
    ORDER_PENDING_STATUS_API_URL,
    ORDER_FULFILL_STATUS_API_URL,
    ORDER_UNFULFILL_STATUS_API_URL
} 
from '../../common/constants';

@Injectable({
    providedIn: 'root'
})

export class OrderService {

    constructor(private http: HttpClient) {
        console.log("Inside OrderService Constructor!");
    }

    //read customers data by making calls to REST API
    fetchAllList(): Observable<Order[]> {
        console.log("Inside fetchAllList fetchOrderData!!");
        return this.http.get<Order[]>(ORDER_API_URL);
    }

    fetchPaidList(): Observable<Order[]> {
        console.log("Inside fetchPaidList fetchOrderData!!");
        return this.http.get<Order[]>(ORDER_PAID_STATUS_API_URL);
    }

    fetchUnpaidList(): Observable<Order[]> {
        console.log("Inside fetchUnpaidList fetchOrderData!!");
        return this.http.get<Order[]>(ORDER_UNPAID_STATUS_API_URL);
    }

    fetchPendingList(): Observable<Order[]> {
        console.log("Inside fetchPendingList fetchOrderData!!");
        return this.http.get<Order[]>(ORDER_PENDING_STATUS_API_URL);
    }

    fetchFulfillList(): Observable<Order[]> {
        console.log("Inside fetchFulfillList fetchOrderData!!");
        return this.http.get<Order[]>(ORDER_FULFILL_STATUS_API_URL);
    }

    fetchUnfulfillList(): Observable<Order[]> {
        console.log("Inside fetchUnfulfillList fetchOrderData!!");
        return this.http.get<Order[]>(ORDER_UNFULFILL_STATUS_API_URL);
    }
}