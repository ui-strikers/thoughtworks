import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Imports components
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';

@NgModule({
    imports: [BrowserModule, HttpClientModule, RouterModule],
    declarations: [
        CustomerCardComponent,
        CustomerListComponent,
        CustomerHeaderComponent,
        CustomerTableComponent,
        CustomerHomeComponent
    ],
    exports: [
        CustomerCardComponent,
        CustomerListComponent,
        CustomerHomeComponent,
        CustomerTableComponent
    ],
    bootstrap: [CustomerCardComponent]
})

export class CustomerModule {
}