import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-catalogo-detalle',
  templateUrl: './catalogo-detalle.component.html',
  styleUrls: ['./catalogo-detalle.component.scss']
})
export class CatalogoDetalleComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<image src="assets/img/inicio/arrow-left-disabled.png">', '<image src="assets/img/inicio/arrow-right-disabled.png">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      992: {
        items: 5
      }
    },
    nav: true
  }
}
