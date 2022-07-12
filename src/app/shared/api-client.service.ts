import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private http: HttpClient) { }

  searchProducts(query: any): any {
    return this.http.get(`https://localhost:7104/api/products?search=${query}`)
  }
}
