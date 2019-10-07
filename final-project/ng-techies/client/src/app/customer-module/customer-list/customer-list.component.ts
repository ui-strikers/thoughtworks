import { Component, OnInit } from '@angular/core';
// Import customer model
import { Customer } from '../models/customer';
// Import customer service
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  providers: [CustomerService]
})

export class CustomerListComponent implements OnInit {

  customers: Customer[];

  getInfo(): void {
    this.service.fetchCustomerData().subscribe((res) => {
      this.customers = res;
    });
  }

  constructor(private service: CustomerService) {
    console.log("Inside Customers List Constructor!");
  }

  ngOnInit() {
    console.log("Inside ngOnInit method!!");
    this.getInfo();
  }
}