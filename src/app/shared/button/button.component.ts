import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from 'src/app/shared/alert/alert.component';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService, private modalService:NgbModal) {}

  isInCart(): boolean {
    return this.cartService.isInCart(this.product.id);
  }

  toggleCart() {
    const modalRef = this.modalService.open(AlertComponent);
    if (this.isInCart()) {
      this.cartService.removeFromCart(this.product.id);
      modalRef.componentInstance.message = 'Ürün sepetten kaldırıldı';
    } else {
      this.cartService.addToCart(this.product);
      modalRef.componentInstance.message = 'Ürün sepete eklendi';
    }
  }
}
