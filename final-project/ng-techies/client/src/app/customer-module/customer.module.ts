import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Imports components
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { CustomerHeaderComponent } from './customer-header/customer-header.component';

// Imports Services 
//import { CustomerService } from './services/customer.service';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        CustomerCardComponent,
        CustomerListComponent,
        CustomerHeaderComponent,
        CustomerTableComponent
    ],
    exports: [
        CustomerCardComponent,
        CustomerListComponent,
        CustomerHeaderComponent,
        CustomerTableComponent,
        RouterModule
    ],
    bootstrap: []
})

export class CustomerModule {
}