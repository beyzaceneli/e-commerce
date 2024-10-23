import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map,tap } from 'rxjs/operators';
import { Product } from '../models/product.model';




@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/product';
  private searchUrl='https://dummyjson.com/products/search?q='

  constructor(private http: HttpClient) { }


  getProducts(page: number = 1): Observable<Product[]> {
    return this.http.get<{ products: Product[] }>(`${this.apiUrl}?page=${page}`).pipe(
      tap((response) => {
        console.log('success:', page, response.products);
      }),
      map(response => response.products),

    );
  }


  sortProductsByPrice(ascending: boolean): Observable<Product[]> {
    return this.getProducts().pipe(
      map(products => products.sort((a, b) => ascending ? a.price - b.price : b.price - a.price))
    );
  }

  getProductDetails(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}?category=${category}`);
  }
  getRelatedProducts(category: string): Observable<Product[]> {
    return this.http.get<{ products: Product[] }>(`${this.apiUrl}/category/${category}`).pipe(
      map(response => response.products)
    );
  }

  searchProducts(query: string): Observable<any> {
    return this.http.get<any>(`${this.searchUrl}${query}`);
  }
}
