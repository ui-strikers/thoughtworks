import { Component,Inject } from '@angular/core';

@Component({
  	selector: 'page-404', 
  	templateUrl :'./not-found.component.html' ,
  	styleUrls: ['./not-found.component.scss']
})

export class NotFoundComponent {

	constructor(@Inject('PATH') private PATH:string){

	}
}
