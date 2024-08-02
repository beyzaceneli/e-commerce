import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit {
  @Input() reviews: Review[] | null = null;
  @Input() readonly: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
}
