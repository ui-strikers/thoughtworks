import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss']
})
export class CustomercardComponent {
  title = 'ordermanagementsystem';

 constructor (private httpService: HttpClient){}

 customers: string[];

 ngOnInit () {
    this.httpService.get('http://localhost:5000/api/customers').subscribe(
      data => {
        this.customers = data as string [];	 
         console.log(this.customers[3]);
      },
      (err: HttpErrorResponse) => {
        console.log ("something is wrong");
      }
    );
  }
}
