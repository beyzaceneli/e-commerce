import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from 'src/app/shared/alert/alert.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) { }

  handleButtonClick(product:Product) {
    const modalRef = this.modalService.open(AlertComponent);
    if (this.cartService.isInCart(product)) {
      this.cartService.removeFromCart(product);
      modalRef.componentInstance.message = 'Ürün sepetten kaldırıldı';
    } else {
      this.cartService.addToCart(product);
      modalRef.componentInstance.message = 'Ürün sepete eklendi';
    }
  }

}
