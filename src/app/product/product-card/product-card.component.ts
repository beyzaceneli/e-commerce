import { Component,Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
@Input() product!: Product;

  constructor(private cartService: CartService) { }

  // onButtonClick(): void {
  //   if (this.product.inCart) {
  //     this.cartService.removeProductFromCart(this.product.id);
  //     this.product.inCart = false;
  //   } else {
  //     this.cartService.addProductToCart(this.product);
  //     this.product.inCart = true;  
  //   }
  // }

  get isOutline(): boolean {
    return !!this.product.inCart; // boolean dönüş sağlar
  }
}
