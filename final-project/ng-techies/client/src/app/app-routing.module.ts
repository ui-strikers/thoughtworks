import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Imports components
import { AboutComponent } from './about/about-component';
import { LoginComponent } from './login/login-component';
import { CustomerOrderComponent } from './order-module/customer-order/customer-order.component';
import { CustomerCardComponent } from './customer-module/customer-card/customer-card.component';
import { CustomerListComponent } from './customer-module/customer-list/customer-list.component';
import { CustomerTableComponent } from './customer-module/customer-table/customer-table.component';

const ROUTES: Routes = [];
// Array of customer List
const CHILD: any =
  [
    { path: 'cardView', component: CustomerCardComponent, pathMatch: 'full' },
    { path: 'tableView', component: CustomerTableComponent, pathMatch: 'full' },
    { path: 'listView', component: CustomerListComponent, pathMatch: 'full' },
    { path: '*', redirectTo: 'cardView', pathMatch: 'full' }
  ];

// header routing list
const ALLROUTES: Routes = [
  { path: '', redirectTo: 'cardView', pathMatch: 'full' },
  { path: 'home', redirectTo: 'cardView', pathMatch: 'full' },
  {
    path: 'cardView', component: CustomerCardComponent,
    children: [CHILD]
  },
  { path: 'customerOrder', component: CustomerOrderComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'cardView', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }