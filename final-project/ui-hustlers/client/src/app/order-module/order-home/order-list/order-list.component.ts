import { Component, Inject } from '@angular/core';
import { OrderService } from '../services/order-api.service';
import { Order } from '../models/order';

@Component({
    selector: 'order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.scss']
})
export class OrderListViewComponent {
    orders: Order[];
    totalPrice: number;

    constructor(private orderservice: OrderService) {
        console.log('Inside order-list constructor');
    }

    ngOnInit() {
        // get data from customer api service
        this.orderservice.getOrderApi()
            .subscribe((res) => {
                this.orders = res;
                console.log(res);
            })

    }

}

