import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;

  quantity: number = 1;

  constructor(private cartService: CartService, private router: Router,) {}

  isInCart(): boolean {
    return this.cartService.isInCart(this.product.id);
  }

  toggleCart() {
    if (this.isInCart()) {
      this.cartService.removeFromCart(this.product.id);
    } else {
      this.cartService.addToCart(this.product);
    }
  }

  onProductClick() {
    this.router.navigate(['/product-detail', this.product.id]);
  }


}
