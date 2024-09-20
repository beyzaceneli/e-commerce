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
  sortedProducts: Product[] = [];
  isLoading = true;
  currentPage = 1;
  ngxScrollActive: boolean = true;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.isLoading = false;
      this.sortedProducts = [...this.products];

    });

  }

  onScrollDown() {
    if (this.ngxScrollActive && !this.isLoading) {

      this.isLoading = true;
      this.currentPage++;

      this.productService.getProducts(this.currentPage).subscribe(products => {
        this.sortedProducts = [...this.sortedProducts, ...products];
        this.isLoading = false;

        // this.toggleScroll();
      }, error => {
        console.error('Ürünler yüklenirken hata oluştu', error);
        this.isLoading = false;
      });
    }
  }

  toggleScroll() {
    this.ngxScrollActive = !this.ngxScrollActive;
    console.log('Infinite scroll aktif durumu: ', this.ngxScrollActive);
  }

  onSortChange(sortType: string) {


    switch (sortType) {
      case 'lowest':
        this.sortedProducts = [...this.products].sort((a, b) => a.price - b.price);
        break;
      case 'highest':
        this.sortedProducts = [...this.products].sort((a, b) => b.price - a.price);
        break;
      default:
        this.sortedProducts = [...this.products];
        break;
    }



  }

}
