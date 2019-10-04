import { CustomerCardComponent } from './customer-module/customer-card/customer-card.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CustomerCardComponent
  ],
  exports: [
    CustomerCardComponent
  ],
  providers: [ ],
  bootstrap: [CustomerCardComponent]
})
export class CustomerModule { }
