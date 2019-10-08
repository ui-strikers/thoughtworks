//Modules import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//Components import
import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { CustomerCardComponent } from './customer-home/customer-card/customer-card.component';
import { CardComponent } from './customer-home/customer-card/card/card.component';
import { CustomerFormComponent } from './customer-home/customer-form/customer-form.component';
import { CustomerListComponent } from './customer-home/customer-list/customer-list.component';
import { CustomerTableComponent } from './customer-home/customer-table/customer-table.component';
import { TableRowComponent } from './customer-home/customer-table/table-row/table-row.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { InnerHeaderComponent } from './inner-header/inner-header.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { ViewOrdersComponent } from './customer-info/view-orders/view-orders.component';

//Services import
import { CustomerService } from './services/customer.service';
import { CustomerOrdersService } from './services/customer-orders.service';


@NgModule({
  imports:[ 
    BrowserModule, 
    RouterModule,
    FormsModule
  ],
  declarations: [
    CustomerHeaderComponent,
    CustomerCardComponent,
    CardComponent,
    CustomerFormComponent,
    CustomerListComponent,
    CustomerTableComponent,
    TableRowComponent,
    CustomerHomeComponent,
    InnerHeaderComponent,
    CustomerInfoComponent,
    ViewOrdersComponent
  ],
  providers: [ CustomerService, CustomerOrdersService ]
})

export class CustomerModule { }
