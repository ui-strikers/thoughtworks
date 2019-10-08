import { Component, Inject, OnInit } from '@angular/core';
import { CustomerApiService } from '../services/customer-api.service';
import { Customer } from '../models/customer';


@Component({
    selector: 'customer-list',
    templateUrl: './customer-list.component.html',
    styleUrls: ['./customer-list.component.scss']
})
export class CustomerListViewComponent implements OnInit{
    customers: Customer[];
    customerProfile='../../../../assets/images';
    constructor(private customerApiService: CustomerApiService) {
        console.log('Inside customer card component constructor');

    }

    ngOnInit() {
        //get customer data from customer api service
        this.customerApiService.getCustomerApi()
            .subscribe((res) => {
                this.customers = res;
            })
    }
}


