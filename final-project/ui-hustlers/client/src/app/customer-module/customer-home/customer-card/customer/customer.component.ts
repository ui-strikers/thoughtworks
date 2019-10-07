import { Component, Input } from '@angular/core';

@Component({
  selector: 'customer',
  templateUrl: "./customer.component.html",
  styleUrls: ['./customer.component.scss']

})
export class CustomerComponent {
  customerProfile='../../../../assets/images';
  // supply customer details from parent(customer-card.component) to child(customer.component)
  @Input()
  customerDetail;

}


