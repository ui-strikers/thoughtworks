import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Order } from '../models/order';
import { Products } from '../models/products';

@Injectable()
// Service class for ajax to get Customer data from server
export class OrderService {

    orderAPI = 'http://localhost:8000/api/orders/';

    constructor(private httpclient: HttpClient) { }

    getOrderApi(): Observable<any> {
        return this.httpclient.get(this.orderAPI)
        // .pipe(
        //         map(order => {
        //             this.calculateOrderTotal([order]);
        //             return order;
        //         }),
                
        //     );
    }

    getPaidOrder(): Observable<any>{
        return this.httpclient.get(this.orderAPI + 'payStatus/paid');
    }

    getUnPaidOrder(): Observable<any>{
        return this.httpclient.get(this.orderAPI + 'payStatus/unpaid');
    }

    getPedingOrder(): Observable<any>{
        return this.httpclient.get(this.orderAPI + 'payStatus/pending');
    }    

    getFillOrder(): Observable<any>{
        return this.httpclient.get(this.orderAPI + 'fulfillStatus/fulfilled');
    }

    getUnFillOrder(): Observable<any>{
        return this.httpclient.get(this.orderAPI + 'fulfillStatus/notfulfilled');
    }

        calculateOrderTotal(orders) {
                let total = 0;
                for (let products of orders.products) {
                    total += products.orderPrice;
                    // console.log(products)
                }
                 return total
            
        
    }


}