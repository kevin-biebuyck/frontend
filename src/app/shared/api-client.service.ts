import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paginated } from './models/Paginated';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private http: HttpClient) { }

  searchProducts(query: string, page:number, pageSize:number): Observable<Paginated<Product>> {
    return this.http.get<Paginated<Product>>(`https://localhost:7104/api/products?search=${query}&page=${page}&pageSize=${pageSize}`)
  }
}
