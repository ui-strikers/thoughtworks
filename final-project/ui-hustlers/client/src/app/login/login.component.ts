import { Component } from '@angular/core';


@Component({
    selector: 'main-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {

    constructor() {
        console.log('Inside login component constructor');
    }

}

