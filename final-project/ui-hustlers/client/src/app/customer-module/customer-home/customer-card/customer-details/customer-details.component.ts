import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerApiService } from '../../services/customer-api.service';



@Component({
    selector: 'customer-detail',
    templateUrl: './customer-details.component.html',
    styleUrls: ['./customer-details.component.scss']
})

export class CustomerDetailComponent implements OnInit, OnDestroy{
    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
    customerIcon = '../../../assets/images';
    total: number;
    public customerDetail;
    constructor(private route: ActivatedRoute, private customerApiService: CustomerApiService) {
        console.log('we are in customer information constructor');

    }

    ngOnInit(): void {

        this.route.params.subscribe(params => {
            console.log(params);
            console.log(+params['id']);
            this.customerApiService.getCustomerDetailApi(params['id'])
                .subscribe((res) => {
                    console.log(res);
                    this.customerDetail = res[0];
                    this.total = this.customerDetail.products.reduce(function (x, y) { x = x + y.orderPrice; return x; }, 0);
                    console.log(this.total);
                })
        });
    }

}