import { Component,OnInit,Inject,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerOrdersService } from '../../services/customer-orders.service';
import { Order } from '../../../order-module/models/order';
import { Product } from '../../../order-module/models/product';

@Component({
  	selector: 'view-orders', 
  	templateUrl :'./view-orders.component.html' ,
  	styleUrls: ['./view-orders.component.scss']
})

export class ViewOrdersComponent implements OnInit,OnDestroy {

    id:string;
    orders:Order[];
    customerOrders:any;

	constructor(private customerOrdersService:CustomerOrdersService, private route:ActivatedRoute){
		console.log("Inside View Orders constructor!");
	}

	ngOnInit(){		
      this.id = this.route.snapshot.params.id;
      this.customerOrders = this.customerOrdersService.fetchProductsData(this.id)
      	.subscribe((ordersList) => {
          debugger;
	        this.orders = ordersList;
    	});  
	}
  ngOnDestroy(){
    console.log("Fetch Product data service unsubscribed!!");
    this.customerOrders.unsubscribe();
  }
}
