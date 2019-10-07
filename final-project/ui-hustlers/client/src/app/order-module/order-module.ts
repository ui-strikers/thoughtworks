import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OrderService } from './order-home/services/order-api.service';
import { OrderHomeComponent } from './order-home/order-home.component';
import { OrderListViewComponent } from './order-home/order-list/order-list.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,

  ],
  declarations: [
      OrderHomeComponent,
      OrderListViewComponent
  ],
  exports: [
      OrderHomeComponent,
  ],
  providers: [
    OrderService
  ],
 
})
export class OrderModule { }
