import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomerCardComponent } from "./customer-card/customer-card.component";
import { CustomerCardItemComponent } from "./customer-card/customer-card-item/customer-card-item.component";
import { CustomerService } from "./services/customer.service";
import { CustomerTableComponent } from "./customer-table/customer-table.component";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerHeaderComponent } from "./customer-header/customer-header.component";
import { CustomerComponent } from "./customer.component";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  declarations: [
    CustomerComponent,
    CustomerCardComponent,
    CustomerCardItemComponent,
    CustomerTableComponent,
    CustomerHeaderComponent,
    CustomerListComponent
  ],
  imports: [CommonModule, AppRoutingModule],
  providers: [CustomerService],
  exports: [
    CustomerComponent,
    CustomerCardComponent,
    CustomerTableComponent,
    CustomerHeaderComponent
  ]
})
export class CustomerModule {}
