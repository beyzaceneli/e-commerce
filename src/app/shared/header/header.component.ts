import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartItemCount$ = this.cartService.cartItemCount$;
  constructor(private cartService: CartService) {}
}
