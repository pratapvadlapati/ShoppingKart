import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }


  getProducts(){
  return  this._http.get('http://localhost:3000/api/products-list')
   
  }

  addItemToCart(item){
        
    return this._http.post('http://localhost:3000/api/add-to-cart', item)
  }

  getCart(){
   return this._http.get('http://localhost:3000/api/get-cart')
  }

}
