import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SharedModule } from '../shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



const routes: Routes = [
  { path: 'product-detail/:id', component: ProductDetailComponent },
];

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductReviewsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbDropdownModule,
    NgbRatingModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes),

  ],
  exports:[
    ProductCardComponent,
    ProductDetailComponent,
    ProductListComponent,
  ]
})
export class ProductModule { }
