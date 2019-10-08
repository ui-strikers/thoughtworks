import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomerApiService } from '../services/customer-api.service';
import { CustomerDetailsService } from '../services/customerdetials-api.service';
import { Customer } from '../models/customer';


@Component({
    selector: 'customer-card',
    templateUrl: './customer-card.component.html',
})

export class CustomerCardViewComponent implements OnInit{
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


