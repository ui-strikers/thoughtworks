import { Component } from '@angular/core';

@Component({
    selector: 'customer-card',
    templateUrl: './customer-card.component.html',
})
export class CustomerCardComponent {
    title = 'Customers Card';
    customers: Array<object>

    constructor() {
        console.log('Inside customer card component constructor');
        // fetch customers data from server
        fetch("http://localhost:8000/api/customers")
            .then(response => response.json())
            .then(customer => {
                // 'customers' is a property in which 'customer' response  
                this.customers = customer;
                console.log(customer);
            })
            .catch(err => {
                console.log(err);
            })
    }
}


