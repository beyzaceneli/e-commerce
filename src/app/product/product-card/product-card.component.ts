import { Component,Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
@Input() product!: Product;

  constructor(private cartService: CartService, private route: ActivatedRoute,) { }

  handleButtonClick(event: any): void {
   
    console.log('Button clicked', event);
  }

}
