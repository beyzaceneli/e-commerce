import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Review } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;
  errorMessage: string | null = null;
  isLoading = true;
  rating: number = 0;
  readonly: boolean = true;
  reviews: Review[] | null = null;
  relatedProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; // Get the ID from the URL
      this.productService.getProductDetails(id).subscribe(
        (data: Product) => {
          this.product = data;
          this.rating = data.rating || 0;
          this.reviews = data.reviews || null;
          this.isLoading = false;
          if (data.category) {
            this.productService.getRelatedProducts(data.category).subscribe(
              (relatedData: Product[]) => {
                if (Array.isArray(relatedData)) {
                  this.relatedProducts = relatedData.filter(p => p.id !== id); // Exclude the current product
                } else {
                  console.error('Related products data is not an array:', relatedData);
                }
              },
              error => {
                console.error('Error fetching related products:', error);
              }
            );
          }
        },
        error => {
          console.error('Error fetching product details:', error);
          this.isLoading = false;
        }
      );
    });
  }
}
