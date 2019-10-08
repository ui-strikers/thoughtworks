import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class CustomerDetailsService {

    customerDetial = 'http://localhost:8000/api/customers/:customerId';

    constructor(private httpclient: HttpClient) { }

    getCustomerApi(): Observable<any> {
        return this.httpclient.get(this.customerDetial)
    }
}