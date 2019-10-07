import { Component, OnInit } from '@angular/core';

// Import customer model
import { Customer } from '../models/customer';
// Import customer service
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