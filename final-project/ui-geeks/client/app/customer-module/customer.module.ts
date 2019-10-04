import { CustomerCardComponent } from './customer-card/customer-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CustomerCardComponent
  ],
  imports:[
    CommonModule
  ],
  exports: [
    CustomerCardComponent
  ],
  providers: [ ],
  bootstrap: [CustomerCardComponent]
})

export class CustomerModule { }
