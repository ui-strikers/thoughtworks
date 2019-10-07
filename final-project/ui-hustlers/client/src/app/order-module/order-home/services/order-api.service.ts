import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
// Service class for ajax to get Customer data from server
export class OrderService {

    orderAPI = 'http://localhost:8000/api/orders/';

    constructor(private httpclient: HttpClient) { }

    getOrderApi(): Observable<any> {
        return this.httpclient.get(this.orderAPI)
    }
}