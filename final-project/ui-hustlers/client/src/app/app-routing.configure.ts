import { Routes, RouterModule } from '@angular/router';
import { CustomerHomeComponent } from './customer-module/customer-home/customer-home.component';
import { LoginComponent } from './login/login.component';
import { OrderHomeComponent } from './order-module/order-home/order-home.component';
import { AboutComponent } from './about/about.component';
import { CustomerCardViewComponent } from './customer-module/customer-home/customer-card/customer-card.component';
import { CustomerListViewComponent } from './customer-module/customer-home/customer-list/customer-list.component';
import { CustomerTableViewComponent } from './customer-module/customer-home/customer-table/customer-table.component';

// customer child comonent binding

const CUSTOMER_ROUTES: Routes = [
	{ path: '', redirectTo: 'cardView', pathMatch: 'full' },
	{ path: 'cardView', component: CustomerCardViewComponent },
	{ path: 'listView', component: CustomerListViewComponent },
	{ path: 'tableView', component: CustomerTableViewComponent },
]


const APP_ROUTES_List: Routes = [
	{ path: '', redirectTo: 'customers', pathMatch: 'full' },
	{ path: 'home', redirectTo: 'customers', pathMatch: 'full' },

	{
		path: 'customers', component: CustomerHomeComponent,

		children: CUSTOMER_ROUTES
	},
	{ path: 'orders', component: OrderHomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'login', component: LoginComponent },

];

export const APP_ROUTES = RouterModule.forRoot(APP_ROUTES_List);


