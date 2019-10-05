//Modules import
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CustomerModule } from './customer-module/customer.module';

//Configuration import
import { AppRoutingModule } from './app-routing.config';

//Components import
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CustomerModule,
    AngularFontAwesomeModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
