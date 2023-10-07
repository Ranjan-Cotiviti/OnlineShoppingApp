import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'https://localhost:7091/api/cart';

  constructor(private http: HttpClient) { }

  getCart(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  addToCart(props: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, props);
  }

  removeFromCart(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/remove/${id}`);
  }

  increaseCartQuantity(id: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/increase-quantity/${id}`, {});
  }

  decreaseCartQuantity(id: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/decrease-quantity/${id}`, {});
  }
}
