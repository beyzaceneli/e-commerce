import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items: Product[] = [];
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.items$.subscribe(items => {
      this.items = items;
      console.log(this.items)
    });
  }

  handleButtonClick(event: any) {
    // Sepete ekleme veya çıkarma işlemini burada gerçekleştirin
    console.log('Button clicked:', event);
  }
}
