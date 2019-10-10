import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { HttpErrorResponse } from '@angular/common/http';
import { Customer } from '../models/customer';
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
    console.log("Inside customercardComponent constructor!!");
  }

  ngOnInit() {
    console.log("Inside customercardComponent  ngOnInit!!");
    //obervable returning customer array  
    this.getInfo();
  }
}
