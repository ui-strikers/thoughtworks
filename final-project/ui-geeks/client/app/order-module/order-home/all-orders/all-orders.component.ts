import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order';
import { Product } from '../../models/product';


@Component({
    selector:'all-orders',
    templateUrl:'./all-orders.component.html',
    styleUrls:['./all-orders.component.scss']
})

export class AllOrdersComponent implements OnInit {
  
    orders:Order[];
    totalOrderPrice = [];

    constructor(private orderService:OrderService){
        console.log('Inside all orders constructor!');
    }

    ngOnInit() {
      console.log("Inside AllOrdersComponent ngOnInit!!");
      this.orderService.fetchOrderData()
          .subscribe((orderList) => {
              for(let order of orderList){
                this.totalOrderPrice.push(this.orderService.fetchOrderTotal(order));
              }
              this.orders = orderList;
       });
    }

}