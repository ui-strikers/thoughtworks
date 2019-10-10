import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
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

    constructor(private service: OrderService) {
        console.log("Inside CustomerOrderComponent List Constructor!");
    }

    allList(): void {
        this.service.fetchAllList().subscribe((res) => {
            this.orders = res;
        });
    }

    ngOnInit() {
        console.log("Inside CustomerOrderComponent ngOnInit method!!");
        this.allList();
    }

    
    paidList(){
        this.service.fetchPaidList().subscribe((res) => {
            this.orders = res;
        });
    }

    unpaidList(){
        this.service.fetchUnpaidList().subscribe((res) => {
            this.orders = res;
        });
    }

    pendingList(){
        this.service.fetchPendingList().subscribe((res) => {
            this.orders = res;
        });
    }

    fulfillList(){
        this.service.fetchFulfillList().subscribe((res) => {
            this.orders = res;
        });
    }

    unfulfillList(){
        this.service.fetchUnfulfillList().subscribe((res) => {
            this.orders = res;
        });
    }
}