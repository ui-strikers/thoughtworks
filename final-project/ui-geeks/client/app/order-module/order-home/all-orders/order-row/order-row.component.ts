import { Component , Input} from '@angular/core';

@Component({
    selector:'[order-row]',
    templateUrl:'./order-row.component.html',
    styleUrls:['./order-row.component.scss']
})

export class OrderRowComponent{

   	@Input()
   	orderList:any;

   	@Input()
   	total:any;

 }