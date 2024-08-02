import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError  } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<{ products: Product[] }>(this.apiUrl).pipe(
      map(response => response.products)
    );
  }

  sortProductsByPrice(ascending: boolean): Observable<Product[]> {
    return this.getProducts().pipe(
      map(products => products.sort((a, b) => ascending ? a.price - b.price : b.price - a.price))
    );
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {

      errorMessage = `Error: ${error.error.message}`;
    } else {

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
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
}
