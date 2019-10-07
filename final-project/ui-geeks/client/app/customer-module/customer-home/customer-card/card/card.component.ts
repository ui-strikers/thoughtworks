import { Component, Input, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  	selector: 'card', 
  	templateUrl :'./card.component.html' ,
  	styleUrls: ['./card.component.scss']
})

export class CardComponent {
    
    constructor(@Inject('PATH') private PATH:string){
    
    }

    @Input()
    data:any;
    
}
