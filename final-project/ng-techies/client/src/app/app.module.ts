import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//Imports Modules
import { CustomerModule } from './customer-module/customer.module';
import { OrderModule } from './order-module/order.module';

// Imports Components
import { HeaderComponent } from './header/header-component';
import { AboutComponent } from './about/about-component';
import { LoginComponent } from './login/login-component';
import { FooterComponent } from './footer/footer-component';
import { AppComponent } from './app.component';

//Import Routing
import { APP_ROUTES } from './app-routing.configure';

@NgModule({
    imports: [
        BrowserModule,
        CustomerModule,
        OrderModule,
        HttpClientModule,
        APP_ROUTES
    ],
    providers: [
        /* { provide : 'createdBy', useValue : ' Team ng-Techies' } */
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        AboutComponent,
        LoginComponent,
        FooterComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}