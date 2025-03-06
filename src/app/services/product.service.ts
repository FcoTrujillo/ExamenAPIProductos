import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponse } from '../interfaces/api-response';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   httpClient = inject(HttpClient);
  private baseUrl : string = 'https://peticiones.online/api/products'

  constructor() { }

  getProducts(page: number = 0, perPage: number = 10): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${this.baseUrl}?page=${page}&per_page=${perPage}`);
  }

  getById(_id: string): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseUrl}/${_id}`);
  }

}

