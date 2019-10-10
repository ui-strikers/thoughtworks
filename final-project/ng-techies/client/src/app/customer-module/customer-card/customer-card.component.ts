import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css'],
  providers: [CustomerService]
})

export class CustomerCardComponent implements OnInit {
  customers: Customer[];
  path: string = 'assets/images/';

  getInfo(): void {
    this.service.fetchCustomerData().subscribe((res) => {
      this.customers = res;
    });
  }
  constructor(private service: CustomerService) {
    console.log("Inside Customers List Constructor!");
  }

  ngOnInit() {
    console.log("Inside CustomerCardComponent ngOnInit method!!");
    this.getInfo();
  }
}