import { Component,OnInit,Inject } from '@angular/core';

@Component({
  	selector: 'under-construction', 
  	templateUrl :'./under-construction.component.html' ,
  	styleUrls: ['./under-construction.component.scss']
})

export class UnderConstructionComponent {

	constructor(@Inject('PATH') private PATH:string){

	}
}
