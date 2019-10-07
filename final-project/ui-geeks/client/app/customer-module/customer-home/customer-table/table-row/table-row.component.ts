import { Component,Inject, Input} from '@angular/core';

@Component({
    selector:'[customer-row]',
    templateUrl:'./table-row.component.html',
    styleUrls:['./table-row.component.scss']
})

export class TableRowComponent{

    constructor(@Inject('PATH') private PATH:string){
        console.log('Inside table row constructor');
    }

    @Input()
    tableData:any;

}