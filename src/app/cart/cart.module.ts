import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { ProductModule } from "../product/product.module";
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    SharedModule
]
})
export class CartModule { }
