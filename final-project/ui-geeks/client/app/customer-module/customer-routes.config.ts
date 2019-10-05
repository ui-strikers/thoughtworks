import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const CUSTOMER_ROUTES: Routes = [
	{path='showCustomerCardView',component:CustomerCardComponent},
	{path='showCustomerListView',component:CustomerListComponent}
	{}
];


export CUSTOMER_ROUTES = RouterModule.forRoot(CUSTOMER_ROUTES);
