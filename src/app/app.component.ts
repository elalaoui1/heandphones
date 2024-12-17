import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SectionHomeComponent } from './section-home/section-home.component';
import { SectionProductsComponent } from './section-products/section-products.component';
import { SectionCarouselComponent } from './section-carousel/section-carousel.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,
           SectionHomeComponent,SectionProductsComponent,
           SectionCarouselComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'headphones';
}
