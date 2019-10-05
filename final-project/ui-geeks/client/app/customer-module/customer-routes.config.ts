import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components import
import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { CustomerFooterComponent } from './customer-footer/customer-footer.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';

const CUSTOMER_ROUTES_LIST: Routes = [
	{ path:'',component : CustomerCardComponent },
	{ path:'showCustomerCardView',component : CustomerCardComponent },
	{ path:'showCustomerListView',component : CustomerListComponent },
	{ path:'showCustomerTableView',component : CustomerTableComponent }
];


export const CUSTOMER_ROUTES = RouterModule.forRoot(CUSTOMER_ROUTES_LIST);
