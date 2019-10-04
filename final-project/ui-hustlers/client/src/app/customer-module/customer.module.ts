import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerComponent } from './customer-card/customer/customer.component';

@NgModule({
    imports: [
    BrowserModule,
  ],
  declarations: [
    CustomerCardComponent,
    CustomerComponent
  ],
  exports:[
    CustomerCardComponent
  ],
  providers: [],
  bootstrap: [CustomerCardComponent]
})
export class CustomerModule { }
