import { Component,OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';
import { distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchControl = new FormControl();
  filteredProducts: any[] = [];

  constructor(private productService: ProductService) {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((query) => this.productService.searchProducts(query))
      )
      .subscribe((response) => {
        this.filteredProducts = response.products;
      });
  }
}
