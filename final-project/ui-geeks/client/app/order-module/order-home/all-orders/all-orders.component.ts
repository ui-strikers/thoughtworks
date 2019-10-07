import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order';
import { Product } from '../../models/product';


@Component({
    selector:'order-table',
    templateUrl:'./all-orders.component.html',
    styleUrls:['./all-orders.component.scss']
})

export class AllOrdersComponent implements OnInit {
  
    orders:Order[];
    totalOrderPrice = [];

    constructor(private orderService:OrderService){
        console.log('inside customer table constructor');
    }

    ngOnInit() {
      console.log("Inside AllOrdersComponent ngOnInit!!");
      this.orderService.fetchOrderData()
          .subscribe((orderList) => {
              for(let order of orderList){
                let product = 0;
                for(let products of order.products){
                  product += products.orderPrice;
                  console.log(products);
                }
                console.log(product);
                this.totalOrderPrice.push(product);
              }
              this.orders = orderList;
       });
       console.log(this.totalOrderPrice);
    }

}