import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CustomerApiService } from './customer-home/services/customer-api.service';
import { CustomerHomeComponent } from './customer-home/customer-home.component'; 
import { CustomerHeaderComponent } from './customer-home/customer-header/customer-header.component';
import { CustomerComponent } from './customer-home/customer-card/customer/customer.component';
import { CustomerCardViewComponent } from './customer-home/customer-card/customer-card.component';
import { CustomerListViewComponent } from './customer-home/customer-list/customer-list.component';
import { CustomerTableViewComponent } from './customer-home/customer-table/customer-table.component';
//import {CUSTOMER_ROUTES} from './customer-routing.configure';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    //CUSTOMER_ROUTES
  ],
  declarations: [
    CustomerHomeComponent,
    CustomerHeaderComponent,
    CustomerComponent,
    CustomerCardViewComponent,
    CustomerListViewComponent,
    CustomerTableViewComponent,
 
  ],
  exports: [
    CustomerHomeComponent,
    CustomerCardViewComponent,
    CustomerListViewComponent,
    CustomerTableViewComponent,
  ],
  providers: [
    CustomerApiService,
  ],
  bootstrap: [CustomerCardViewComponent]
})
export class CustomerModule { }
