import { Component, Inject } from '@angular/core';
import { CREATED_BY } from '../common/constants';

@Component({
    selector: 'page-footer',
    templateUrl: './footer-component.html',
    styleUrls: ['./footer-component.css']
})

export class FooterComponent {
    createdby: string = CREATED_BY;
    constructor( /*@Inject('createdBy') private createdby: string*/) {
        console.log(`Inside the FooterComponent constructor..!!`);
    }
}