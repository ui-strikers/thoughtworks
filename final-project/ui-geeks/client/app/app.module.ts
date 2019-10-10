//Modules import
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { CustomerModule } from './customer-module/customer.module';
import { OrderModule } from './order-module/order.module';

//Configuration import
import { AppRoutingModule } from './app-routing.config';

//Components import
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/header.component';
import { AppFooterComponent } from './footer/footer.component';
import { AppAboutComponent } from './about/about.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppAboutComponent,
    UnderConstructionComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CustomerModule,
    OrderModule,
    AngularFontAwesomeModule
  ],
  providers: [ 
    { provide : 'TEAM' , useValue : 'UI Geeks'},
    { provide : 'PATH' , useValue : 'assets/images/'},
    { provide : 'CUSTOMERS_API' , useValue : 'http://localhost:5000/api/customers'},
    { provide : 'NEW_CUSTOMERS_API' , useValue : 'http://localhost:5000/api/customers'},
    { provide : 'ORDERS_API' , useValue : 'http://localhost:5000/api/orders'},
    { provide : 'ORDER_PAY_STATUS_API' , useValue : 'http://localhost:5000/api/orders/payment/'},
    { provide : 'ORDER_FULFILL_STATUS_API' , useValue : 'http://localhost:5000/api/orders/fulfill/'},
    { provide : 'CUSTOMER_ORDERS_API' , useValue : 'http://localhost:5000/api/customer/:id/orders'}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
