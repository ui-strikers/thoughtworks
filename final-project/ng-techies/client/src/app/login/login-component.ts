import { Component } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login-component.html',
    styleUrls: ['./login-component.css']
})

export class LoginComponent {
    constructor() {
        console.log(`Inside the LoginComponent constructor..!!`);
    }
}