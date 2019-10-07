import { Component} from '@angular/core';

@Component({
  	selector: 'order-header', 
  	templateUrl :'./order-header.component.html' ,
  	styleUrls: ['./order-header.component.scss']
})

export class OrderHeaderComponent {
	
	title:string = "Orders";
	
}
