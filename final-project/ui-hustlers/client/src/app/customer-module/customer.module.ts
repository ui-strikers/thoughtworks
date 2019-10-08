
//modules 
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//components 
import { CustomerHomeComponent } from './customer-home/customer-home.component'; 
import { CustomerHeaderComponent } from './customer-home/customer-header/customer-header.component';
import { CustomerComponent } from './customer-home/customer-card/customer/customer.component';
import { CustomerCardViewComponent } from './customer-home/customer-card/customer-card.component';
import { CustomerListViewComponent } from './customer-home/customer-list/customer-list.component';
import { CustomerTableViewComponent } from './customer-home/customer-table/customer-table.component';
import { NewCustomerComponent } from './customer-home/new-customer/new-customer.component';
import { CustomerDetailComponent } from './customer-home/customer-card/customer-details/customer-details.component';

//services 
import { CustomerApiService } from './customer-home/services/customer-api.service';
import { SearchPipe } from './customer-home/customer-header/filter-pipe.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],

  declarations: [
    CustomerHomeComponent,
    CustomerHeaderComponent,
    CustomerComponent,
    CustomerCardViewComponent,
    CustomerListViewComponent,
    CustomerTableViewComponent,
    CustomerDetailComponent,
    NewCustomerComponent,
    SearchPipe
  ],
  exports: [
    CustomerHomeComponent,
    CustomerCardViewComponent,
    CustomerListViewComponent,
    CustomerTableViewComponent,
    NewCustomerComponent
  ],
  providers: [
    CustomerApiService,
  ],
  bootstrap: [CustomerHomeComponent]
})
export class CustomerModule { }
