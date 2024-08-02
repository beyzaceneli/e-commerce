import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>(this.cart);
  items$ = this.cartSubject.asObservable();

  isInCart(productId: number): boolean {
    return this.cart.some(item => item.id === productId);
  }

  addToCart(product: Product) {
    this.cart.push(product);
    this.cartSubject.next(this.cart);
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.cartSubject.next(this.cart);
  }
}