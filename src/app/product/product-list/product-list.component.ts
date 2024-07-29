import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products:Product[]=[];
  isLoading = true;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.isLoading = false;
      this.sortProducts('default');
      console.log(this.products)
    });
  }
  sortedProducts = [...this.products];



  onSortChanged(sortType: string) {
    this.sortProducts(sortType);
  }

  sortProducts(sortType: string) {
    if (sortType === 'lowest') {
      this.sortedProducts = [...this.products].sort((a, b) => a.price - b.price);
    } else if (sortType === 'highest') {
      this.sortedProducts = [...this.products].sort((a, b) => b.price - a.price);
    } else {
      this.sortedProducts = [...this.products];
    }
  }
}
