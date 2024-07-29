import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ProductCardComponent,
    ProductDetailComponent,
    ProductListComponent
  ]
})
export class ProductModule { }
