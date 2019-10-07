//Modules import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//Components import
import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { CustomerCardComponent } from './customer-home/customer-card/customer-card.component';
import { CardComponent } from './customer-home/customer-card/card/card.component';
import { CustomerListComponent } from './customer-home/customer-list/customer-list.component';
import { CustomerTableComponent } from './customer-home/customer-table/customer-table.component';
import { TableRowComponent } from './customer-home/customer-table/table-row/table-row.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';

//Services import
import { CustomerService } from './services/customer.service';


@NgModule({
  imports:[ 
    BrowserModule, RouterModule
  ],
  declarations: [
    CustomerHeaderComponent,
    CustomerCardComponent,
    CardComponent,
    CustomerListComponent,
    CustomerTableComponent,
    TableRowComponent,
    CustomerHomeComponent
  ],
  providers: [ CustomerService ]
})

export class CustomerModule { }
