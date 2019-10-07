import { Component } from '@angular/core';

@Component({
    selector: 'customer-header',
    templateUrl: './customer-header.component.html',
    styleUrls: ['./customer-header.component.scss']
})
export class CustomerHeaderComponent {
    customerIcon='../../../assets/images';
    constructor() {
        console.log("inside customer header constructor");
    }
}


