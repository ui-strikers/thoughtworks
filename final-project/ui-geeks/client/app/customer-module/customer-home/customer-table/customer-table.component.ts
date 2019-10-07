import { Component, OnInit, Inject } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';
import { Address } from '../../models/address';


@Component({
    selector:'customer-table',
    templateUrl:'./customer-table.component.html',
    styleUrls:['./customer-table.component.scss']
})

export class CustomerTableComponent implements OnInit {

    customers:Customer[];

    constructor(private customerService:CustomerService, @Inject('PATH') private PATH:string){
        console.log('inside customer table constructor');
    }

    ngOnInit(){
        console.log("Inside CustomerTableComponent ngOnInit!!");
        this.customerService.fetchCustomerData()
            .subscribe((customerList)=>{
                this.customers = customerList;
         });
    }

}