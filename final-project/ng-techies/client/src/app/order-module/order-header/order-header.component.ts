import { Component } from '@angular/core';

@Component({
    selector: 'order-header',
    templateUrl: './order-header.component.html',
    styleUrls: ['./order-header.component.css']
})

export class OrderHeaderComponent {

    constructor() {
        console.log("Inside OrderHeaderComponent Constructor!");
    }
}