import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Root Components import
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/header.component';
import { AppFooterComponent } from './footer/footer.component';
import { AppAboutComponent } from './about/about.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { NotFoundComponent } from './not-found/not-found.component';

//Customer Components import
import { CustomerHeaderComponent } from './customer-module/customer-header/customer-header.component';
import { CustomerHomeComponent } from './customer-module/customer-home/customer-home.component';
import { CustomerFormComponent } from './customer-module/customer-home/customer-form/customer-form.component';
import { CustomerCardComponent } from './customer-module/customer-home/customer-card/customer-card.component';
import { CustomerListComponent } from './customer-module/customer-home/customer-list/customer-list.component';
import { CustomerTableComponent } from './customer-module/customer-home/customer-table/customer-table.component';
import { CustomerInfoComponent } from './customer-module/customer-info/customer-info.component';
import { ViewOrdersComponent } from './customer-module/customer-info/view-orders/view-orders.component';

//Order Components import
import { OrderHeaderComponent } from './order-module/order-header/order-header.component';
import { OrderHomeComponent } from './order-module/order-home/order-home.component';
import { AllOrdersComponent } from './order-module/order-home/all-orders/all-orders.component';
import { OrdersComponent } from './order-module/order-home/orders/orders.component';

const ROUTE_LIST: Routes = [
	{ path:'', redirectTo : 'customers', pathMatch:'full' },
	{ path:'home', redirectTo : 'customers', pathMatch:'full' },
	{ path:'customers', component : CustomerHomeComponent, children :
		[
			{ path: '', redirectTo: 'card' , pathMatch: 'full' },
			{ path:'card' , component : CustomerCardComponent },
			{ path:'list' , component : CustomerListComponent },
			{ path:'table' , component : CustomerTableComponent },
			{ path:'newCustomer' , component : CustomerFormComponent }
		]
	},
	{ path:'customer-info', component : CustomerInfoComponent, children :
		[
			{ path: '', redirectTo: 'viewOrders' , pathMatch: 'full' },
			{ path:'viewOrders/:id' , component : ViewOrdersComponent }
		]
	},
	{ path:'orders', component : OrderHomeComponent, children :
		[
			{ path: '', redirectTo: 'allOrders' , pathMatch: 'full' },
			{ path:'allOrders' , component : AllOrdersComponent },
			{ path:':status' , component : OrdersComponent }
		]
	},
	{ path:'about',component : AppAboutComponent },
	{ path:'login',component : UnderConstructionComponent },
	{ path:'**',component : NotFoundComponent }
];

export const AppRoutingModule = RouterModule.forRoot(ROUTE_LIST);

