import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order-api.service';
import { Order } from '../models/order';

@Component({
    selector: 'order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.scss']
})
export class OrderListViewComponent implements OnInit{
    orders: Order[];
    totalOrderPrice = [];

    constructor(private orderservice: OrderService) {
        console.log('Inside order-list constructor');
    }

    ngOnInit() {
        // get data from customer api service
        this.orderservice.getOrderApi()
            .subscribe((res) => {
                this.orders = res;
                for(let order of res){
                this.totalOrderPrice.push(this.orderservice.calculateOrderTotal(order));
                console.log(this.totalOrderPrice)
              }
            })
    } 

    allstatus(evt){
        this.orderservice.getOrderApi()
        .subscribe((orders) =>{
            this.orders = orders;
            console.log(orders);
        })
    }   

    paidStatus(evt){
        this.orderservice.getPaidOrder()
        .subscribe((paid) => {
            this.orders = paid;
            console.log(paid);
        })
    }

    unPaidStatus(evt){
        this.orderservice.getUnPaidOrder()
        .subscribe((unpaid) => {
            this.orders = unpaid;
            console.log(unpaid);

        })

    }

    pendingStatus(evt){
        this.orderservice.getPedingOrder()
        .subscribe((pending) => {
            this.orders = pending;
            console.log(pending);
        })
    }

    fulFillStatus(evt){
        this.orderservice.getFillOrder()
        .subscribe((fulfill) => {
            this.orders = fulfill;
            console.log(fulfill);
        })
    }

    unFillStatus(evt){
        this.orderservice.getUnFillOrder()
        .subscribe((unFill) => {
            this.orders = unFill;
            console.log(unFill);
        })
    }


}

