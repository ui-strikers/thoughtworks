//Modules import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Components import
import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { CustomerFooterComponent } from './customer-footer/customer-footer.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';


//Configuration import
import { AppRoutingModule } from './app-routing.config';

//Services import
import { CustomerService } from './services/customer.service';

@NgModule({
  declarations: [
    CustomerHeaderComponent,
    CustomerFooterComponent,
    CustomerCardComponent,
    CustomerListComponent,
    CustomerTableComponent
  ],
  imports:[
    BrowserModule, forRoot(CUSTOMER_ROUTES)
  ],
  exports: [
    CustomerHeaderComponent,
    CustomerFooterComponent,
    CustomerCardComponent, 
    CustomerListComponent,
    CustomerTableComponent
  ],
  providers: [ CustomerService,
    { provide : 'team' , useValue : 'UI Geeks'}
  ],
  bootstrap: [ CustomerHeaderComponent ]
})

export class CustomerModule { }
