//Modules import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//Components import
import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { CustomerFooterComponent } from './customer-footer/customer-footer.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';

//Configuration import
import { CUSTOMER_ROUTES } from './customer-routes.config';

//Services import
import { CustomerService } from './services/customer.service';


@NgModule({
  imports:[ 
    BrowserModule,
    CUSTOMER_ROUTES
  ],
  declarations: [
    CustomerHeaderComponent,
    CustomerFooterComponent,
    CustomerCardComponent,
    CustomerListComponent,
    CustomerTableComponent
  ],
  exports: [
    CustomerHeaderComponent,
    CustomerFooterComponent,
    CustomerCardComponent, 
    CustomerListComponent,
    CustomerTableComponent,
    RouterModule
  ],
  providers: [ CustomerService,
    { provide : 'team' , useValue : 'UI Geeks'}
  ],
  bootstrap: [ CustomerHeaderComponent ]
})

export class CustomerModule { }
