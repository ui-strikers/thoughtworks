import { Component,Input } from '@angular/core';

@Component({
  selector: 'customer',
    template: `
            <article class="customer">
                <header class="customer__name bg-primary"><h3 class="text-white">{{value.name}}</h3></header>
                  <section class="customer__details">
                    <figure class="customer__profile">
                      <img class="img-fill" src="{{value.profilePicture}}" title="{{value.name}}" alt="{{value.name}}">
                    </figure>
                    <address class="customer__address">
                      <p class="customer__details-state">{{value.address.state}}</p>
                      <p class="customer__details-city">{{value.address.country}}</p>
                      <p class="customer__details-orders"><a class="text-blue" href="">View Orders</a></p>
                    </address>
                  </section>          
            </article>                
        `,
  styleUrls: ['../app.component.scss']
})
export class CustomerComponent {
  title = 'Customer';

  @Input()
  value;

  } 


