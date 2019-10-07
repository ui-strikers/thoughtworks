import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';

import { CUSTOMER_API_URL } from '../../common/constants';

@Injectable({
    providedIn: 'root'
})

export class CustomerService {

    constructor(private http: HttpClient) {
        console.log("Inside CustomerService Constructor!");
    }

    //read customers data by making calls to REST API
    fetchCustomerData():Observable<Customer[]> {
        console.log("Inside CustomerService fetchCustomerData!!");
        return this.http.get<Customer[]>(CUSTOMER_API_URL);
    }
}