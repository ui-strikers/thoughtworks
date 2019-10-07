import { Component,Inject } from '@angular/core';

@Component({
  	selector: 'app-footer', 
  	templateUrl : './footer.component.html' ,
  	styleUrls: ['./footer.component.scss']
})

export class AppFooterComponent {

	constructor( @Inject('TEAM') private TEAM:string){
    		console.log("Inside Customers Footer Constructor!");
   	}
	
}
