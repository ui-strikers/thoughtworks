import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderStatusService } from '../../services/order-status.service';
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

    constructor(private orderStatusService:OrderStatusService, private route:ActivatedRoute){
        console.log('Inside all orders constructor!');
    }

    ngOnInit() {
      this.status = this.route.snapshot.params.status;
      console.log("Inside OrdersComponent ngOnInit!!");

      if(this.status == 'paid' || this.status == 'unpaid' || this.status == 'pending'){
        this.payDataService = this.orderStatusService.fetchPayData(this.status)
          .subscribe((orderPayList) => {
              for(let order of orderPayList){
                this.totalOrderPrice.push(this.orderStatusService.fetchOrderTotal(order));
              }
            this.orders = orderPayList;
          });        
      }
      else{
        this.fulfillDataService = this.orderStatusService.fetchFulfillData(this.status)
          .subscribe((orderFulfillmentList) => {
              for(let order of orderFulfillmentList){
                this.totalOrderPrice.push(this.orderStatusService.fetchOrderTotal(order));
              }
            this.orders = orderFulfillmentList;
          });
      }
    }

    /*ngOnDestroy(){
      this.payDataService.unsubscribe();
      this.fulfillDataService.unsubscribe();
    }*/

}