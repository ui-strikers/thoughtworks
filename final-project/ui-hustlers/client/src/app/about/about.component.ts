import { Component } from '@angular/core';

@Component({
    selector: 'main-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})

export class AboutComponent {

    constructor() {
        console.log('Inside about conponent constructor');
    }


}

