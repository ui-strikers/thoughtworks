import { Component,Inject } from '@angular/core';

@Component({
  	selector: 'customer-footer', 
  	templateUrl : './customer-footer.component.html' ,
  	styleUrls: ['./customer-footer.component.scss']
})

export class CustomerFooterComponent {

	constructor( @Inject('team') private team:string){
    		console.log("Inside Customers Footer Constructor!");
   	}
	
}
