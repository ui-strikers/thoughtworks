//Modules import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//Components import
import { OrderHeaderComponent } from './order-header/order-header.component';
import { OrderHomeComponent } from './order-home/order-home.component';
import { AllOrdersComponent } from './order-home/all-orders/all-orders.component';
import { OrdersComponent } from './order-home/orders/orders.component';
import { OrderRowComponent } from './order-home/all-orders/order-row/order-row.component';


//Services import
import { OrderService } from './services/order.service';

@NgModule({
  imports:[ 
    BrowserModule, 
    RouterModule
  ],
  declarations: [
    OrderHeaderComponent,
    OrderHomeComponent,
    AllOrdersComponent,
    OrdersComponent,
    OrderRowComponent
  ],
  providers: [ OrderService ]
})

export class OrderModule { }
