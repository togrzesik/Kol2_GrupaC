import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/coomon/http";

@Injectable({
  providedIn: 'root'
})
export class TGDataService {
  private url = 'https://kol2tai.herokuapp.com';
  constructor(private http: HttpClient) { }

  getShopItems() {
    return this.http.get(this.url + '/api/shop/items');
  }

  getById(id) {
    return this.http.get(this.url + '/api/shop/items'+ id);
  }
}
