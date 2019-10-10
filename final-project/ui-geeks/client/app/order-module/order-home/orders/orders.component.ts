import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order';
import { Product } from '../../models/product';


@Component({
    selector:'orders',
    templateUrl:'./orders.component.html',
    styleUrls:['./orders.component.scss']
})

export class OrdersComponent implements OnInit,OnDestroy {
  
    status:string;
    orders:Order[];
    totalOrderPrice = [];
    payDataService:any;
    fulfillDataService:any;

    constructor(private orderService:OrderService, private activeRoute:ActivatedRoute){
        console.log('Inside OrdersComponent constructor!');
    }

    ngOnInit() {
      console.log("Inside OrdersComponent ngOnInit!!");
    
      this.activeRoute.params.subscribe((params)=>{
          let status = params['status'];
          this.fetchByStatus(status); 
      });
    }


    fetchByStatus(status:string){
      if(status == 'paid' || status == 'unpaid' || status == 'pending') {
        this.payDataService = this.orderService.fetchPayData(status)
          .subscribe((orderPayList) => {
              for(let order of orderPayList){
                this.totalOrderPrice.push(this.orderService.fetchOrderTotal(order));
              }
            this.orders = orderPayList;
          });        
      }
      else{
        this.fulfillDataService = this.orderService.fetchFulfillData(status)
          .subscribe((orderFulfillmentList) => {
              for(let order of orderFulfillmentList){
                this.totalOrderPrice.push(this.orderService.fetchOrderTotal(order));
              }
            this.orders = orderFulfillmentList;
          });
      }
    }

    ngOnDestroy(){
      this.payDataService.unsubscribe();
      this.fulfillDataService.unsubscribe();
    }

}