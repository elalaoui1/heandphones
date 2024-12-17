import { CommonModule } from '@angular/common';
import { Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-section-products',
  imports: [CommonModule],
  templateUrl: './section-products.component.html',
  styleUrl: './section-products.component.css'
})
export class SectionProductsComponent implements AfterViewInit {

  selectedColorCheck: string = 'black';

  ngAfterViewInit() {
    const colorOptions = document.querySelectorAll('.color-option');
    const productImage = document.getElementById('productImage') as HTMLImageElement;

    colorOptions.forEach(option => {
      option.addEventListener('click', () => {
        const selectedColor = option.getAttribute('data-color');
        if (selectedColor && productImage) {
          this.selectedColorCheck= selectedColor;
          productImage.src = `assets/product-${selectedColor}.png`;

        }

      });

    });
  }

}
