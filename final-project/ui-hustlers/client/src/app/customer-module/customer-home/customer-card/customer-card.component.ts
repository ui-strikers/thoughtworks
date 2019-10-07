import { Component } from '@angular/core';
import { CustomerApiService } from '../services/customer-api.service';
import { Customer } from '../models/customer';


@Component({
    selector: 'customer-card',
    templateUrl: './customer-card.component.html',
})

export class CustomerCardViewComponent {
    customers: Customer[];

    constructor(private customerApiService: CustomerApiService) {
        console.log('Inside customer card component constructor');

    }

    ngOnInit() {
        
        // get data from customer api service
        this.customerApiService.getCustomerApi()
        .subscribe((res) => {
            this.customers = res;
        })
    }
}


