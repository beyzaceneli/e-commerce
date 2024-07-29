import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  private itemsSubject = new BehaviorSubject<Product[]>([]);
  items$ = this.itemsSubject.asObservable();
  private cartItemCount = new BehaviorSubject<number>(0);
  cartItemCount$ = this.cartItemCount.asObservable();

  constructor() { }


  addToCart(product: Product) {
    const currentItems = this.itemsSubject.value;
    this.itemsSubject.next([...currentItems, product]);
    let currentCount = this.cartItemCount.value;
    this.cartItemCount.next(currentCount + 1);
  }


  getItems() {
    return this.itemsSubject.value;
  }
 

  removeFromCart(product: Product) {
    const currentItems = this.itemsSubject.value;
    const updatedItems = currentItems.filter(item => item.id !== product.id);
    this.itemsSubject.next(updatedItems);
  }




  isInCart(product: Product): boolean {
    return this.itemsSubject.value.some(item => item.id === product.id);
  }

  updateCartItemCount(count: number) {
    this.cartItemCount.next(count);
  }
}