import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() action!: 'Add Basket' | 'Remove';
  @Input() product!: Product;
  @Output() buttonClick = new EventEmitter<Product>();

  constructor(private cartService: CartService) { }

  toggleCart(): void {
    if (this.cartService.isInCart(this.product)) {
      this.cartService.removeFromCart(this.product);
      this.product.inCart = false; // product.inCart özelliğini güncelle
      alert('Removed from basket');
    } else {
      this.cartService.addToCart(this.product);
      this.product.inCart = true; // product.inCart özelliğini güncelle
      alert('Added to basket');
    }
    this.buttonClick.emit(this.product); // Product nesnesini emit et
  }
}
