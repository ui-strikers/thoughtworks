import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Imports components
import { CustomerOrderComponent } from './customer-order/customer-order.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        CustomerOrderComponent
    ],
    exports: [
        CustomerOrderComponent,
        RouterModule
    ],
    bootstrap: []
})

export class OrderModule {
}