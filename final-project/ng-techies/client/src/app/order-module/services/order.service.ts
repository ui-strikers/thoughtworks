import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { ORDER_API_URL } from '../../common/constants';

@Injectable({
    providedIn: 'root'
})

export class OrderService {

    constructor(private http: HttpClient) {
        console.log("Inside OrderService Constructor!");
    }

    //read customers data by making calls to REST API
    fetchOrderData(): Observable<Order[]> {
        console.log("Inside OrderService fetchOrderData!!");
        return this.http.get<Order[]>(ORDER_API_URL);
    }
}