import { Component } from '@angular/core';

@Component({
    selector: 'page-header',
    templateUrl: './header-component.html',
    styleUrls: ['./header-component.css']
})

export class HeaderComponent {
    constructor() {
        console.log(`Inside the HeaderComponent constructor..!!`);
    }
}