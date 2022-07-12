import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private http: HttpClient) { }

  searchProducts(query: string, page:number, pageSize:number): Observable<Product[]> {
    return this.http.get<Product[]>(`https://localhost:7104/api/products?search=${query}&page=${page}&pageSize=${pageSize}`)
  }
}
