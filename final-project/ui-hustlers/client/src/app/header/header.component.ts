
import { Component } from '@angular/core';

@Component({
    selector: 'main-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    imgPath='../../../assets/images';
    constructor() {
        console.log('Inside header component constructor');
    }

}
