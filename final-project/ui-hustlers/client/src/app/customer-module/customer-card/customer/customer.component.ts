import { Component,Input } from '@angular/core';

@Component({
  selector: 'customer',
    // customer card template import 
    templateUrl: "./customer.component.html",
     // customer card style import 
    styleUrls: ['./customer.component.scss']

})
export class CustomerComponent {
  title = 'Customer';
// communicate from parent(customer-card.component) to child(customer.component )
  @Input()
  value;

  } 


