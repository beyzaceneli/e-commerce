import { Component,OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchControl = new FormControl('');
  searchResults$!: Observable<any[]>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.searchResults$ = this.searchControl.valueChanges.pipe(
      debounceTime(300), // Kullanıcı yazmayı durdurduktan sonra 300ms bekle
      switchMap(searchTerm => this.productService.searchProducts(searchTerm ?? ''))

    );
  }
}
