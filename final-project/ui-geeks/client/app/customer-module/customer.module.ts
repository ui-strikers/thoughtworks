
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';

import { CustomerService } from './services/customer.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';



@NgModule({
  declarations: [
    CustomerHeaderComponent,
    CustomerCardComponent,
    CustomerListComponent,
    CustomerTableComponent
  ],
  imports:[
    CommonModule,
    AngularFontAwesomeModule
  ],
  exports: [
    CustomerHeaderComponent,
    CustomerCardComponent, 
    CustomerListComponent,
    CustomerTableComponent
  ],
  providers: [ CustomerService ],
  bootstrap: [ CustomerHeaderComponent ]
})

export class CustomerModule { }
