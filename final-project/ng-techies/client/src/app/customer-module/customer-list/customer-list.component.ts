import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
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