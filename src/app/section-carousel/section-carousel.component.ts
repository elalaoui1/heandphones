import { Component, AfterViewInit } from '@angular/core';

declare var Swiper: any;

@Component({
  selector: 'app-section-carousel',
  imports: [],
  templateUrl: './section-carousel.component.html',
  styleUrl: './section-carousel.component.css',
})
export class SectionCarouselComponent implements AfterViewInit{

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper', {
      loop: true,
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        depth: 250,
        modifier: 1,
        scale: 0.75,
        slideShadows: false,
        stretch: -100,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
}

