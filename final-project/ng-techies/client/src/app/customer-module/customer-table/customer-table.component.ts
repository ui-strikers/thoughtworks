import { Component, OnInit } from '@angular/core';
// Import customer model
import { Customer } from '../models/customer';
// Import customer service
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css'],
  providers: [CustomerService]
})

export class CustomerTableComponent implements OnInit {

  customers: Customer[];

  getInfo(): void {
    this.service.fetchCustomerData().subscribe((res) => {
      this.customers = res;
    });
  }

  constructor(private service: CustomerService) {
    console.log("Inside customerTableComponent constructor!!");
  }

  ngOnInit() {
    console.log("Inside customerCardComponent  ngOnInit!!");
    this.getInfo();
  }
}
