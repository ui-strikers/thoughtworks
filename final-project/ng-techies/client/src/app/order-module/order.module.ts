import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Imports order components
import { CustomerOrderComponent } from './customer-order/customer-order.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [
        CustomerOrderComponent
    ],
    exports: [
        CustomerOrderComponent,
        RouterModule
    ],
    bootstrap: [CustomerOrderComponent]
})

export class OrderModule {
}