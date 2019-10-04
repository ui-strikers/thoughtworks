import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './approuting.config';
import { AppComponent } from './app.component';
import { CustomerModule } from './customer-module/customer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CustomerModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
