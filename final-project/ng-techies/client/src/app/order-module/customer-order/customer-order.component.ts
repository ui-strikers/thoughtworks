import { Component, OnInit } from '@angular/core';
// Import order model
import { Order } from '../models/order';
// Import Service
import { OrderService } from '../services/order.service';

@Component({
    selector: 'customer-order',
    templateUrl: './customer-order.component.html',
    styleUrls: ['./customer-order.component.css'],
    providers: [OrderService]
})

export class CustomerOrderComponent implements OnInit {

    orders: Order[];
    fulfill_Status: boolean = true;
    path: string = 'assets/images/';

    getInfo(): void {
        this.service.fetchOrderData().subscribe((res) => {
            this.orders = res;
        });
    }
    constructor(private service: OrderService) {
        console.log("Inside CustomerOrderComponent List Constructor!");
    }

    ngOnInit() {
        console.log("Inside CustomerOrderComponent ngOnInit method!!");
        this.getInfo();
    }
}