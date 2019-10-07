import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
// Service class for ajax to get Customer data from server
export class CustomerApiService {

    customerAPI = 'http://localhost:8000/api/customers';

    constructor(private httpclient: HttpClient) { }

    getCustomerApi(): Observable<any> {
        return this.httpclient.get(this.customerAPI)
    }
}