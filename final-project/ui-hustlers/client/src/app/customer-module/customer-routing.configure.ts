import { Routes, RouterModule } from '@angular/router';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerListViewComponent } from './customer-home/customer-list/customer-list.component';
import { CustomerTableViewComponent } from './customer-home/customer-table/customer-table.component';

const CUSTOMER_ROUTES_List : Routes = [
	{path:'',component:CustomerHomeComponent},
	{path:'showCustomerCardView',component:CustomerHomeComponent},
	{path:'showCustomerListView',component:CustomerListViewComponent},
	{path:'showCustomerTableView',component:CustomerTableViewComponent},
];

export const CUSTOMER_ROUTES = RouterModule.forRoot(CUSTOMER_ROUTES_List);
  

