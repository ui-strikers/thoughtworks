import { Component, OnInit } from '@angular/core';
import { CustomerApiService } from '../services/customer-api.service';
import { Customer } from '../models/customer';

@Component({
    selector: 'customer-table',
    templateUrl: './customer-table.component.html',
    styleUrls: ['./customer-table.component.scss']
})

export class CustomerTableViewComponent implements OnInit{
    customers: Customer[];
    customerProfile="../../../assets/images";
    constructor(private customerApiService: CustomerApiService) {
        console.log('Inside customer card component constructor');
    }

    ngOnInit() {
        //Ajax call to fetch data from server
        this.customerApiService.getCustomerApi()
            .subscribe((res) => {
                this.customers = res;
            })
    }
}

