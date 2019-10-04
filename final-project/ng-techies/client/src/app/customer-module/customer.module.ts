import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';



import { CustomercardComponent } from './customer-card/customer-card.component';


@NgModule({
  declarations: [
     CustomercardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CustomercardComponent]
})
export class AppModule { }
