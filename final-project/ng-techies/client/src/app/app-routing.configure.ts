import { Routes, RouterModule } from '@angular/router';
// import customer module
import { CustomerCardComponent } from './customer-module/customer-card/customer-card.component';
import { CustomerListComponent } from './customer-module/customer-list/customer-list.component';
import { CustomerTableComponent } from './customer-module/customer-table/customer-table.component';
import { CustomerHomeComponent } from './customer-module/customer-home/customer-home.component';
// Imports components
//import { OrderHeaderComponent } from './order-module/order-home/order-header/order-header.component';
import { CustomerOrderComponent } from './order-module/customer-order/customer-order.component';

import { AboutComponent } from './about/about-component';
import { LoginComponent } from './login/login-component';


const CUSTOMER_ROUTES: Routes = [
  { path: '', redirectTo: 'cardView', pathMatch: 'full' },
  { path: 'cardView', component: CustomerCardComponent },
  { path: 'tableView', component: CustomerTableComponent },
  { path: 'listView', component: CustomerListComponent }
]

const APP_ROUTESLIST: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'home', redirectTo: 'customers', pathMatch: 'full' },
  {
    path: 'customers', component: CustomerHomeComponent, children: CUSTOMER_ROUTES
  },
  { path: 'customerOrder', component: CustomerOrderComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent }
];

export const APP_ROUTES = RouterModule.forRoot(APP_ROUTESLIST);