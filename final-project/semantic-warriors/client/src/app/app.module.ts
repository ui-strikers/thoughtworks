import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
//user define
import {CustomerCardComponent} from "./customers/customer-card/customer-card.component";

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    CustomerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [CustomerCardComponent]
})
export class AppModule { }
