import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UxproductService {
  url='https://uxproducts-41081-default-rtdb.firebaseio.com/products.json';
  
  private headers =new HttpHeaders({'Content-Type' : 'application/json'});
  constructor(private http:HttpClient) { }
  // saveProducts(products:any[]){
  //   return this.http.put(`${this.url}/products.json`,products)
  // }
  saveProducts(products:any):Observable<any>{
    return this.http.put(this.url,products,{headers : this.headers})
  }
  fetchProducts():Observable<any>{
    return this.http.get(this.url);
  }
  getTitle():Observable<any>{
    return this.http.get('https://uxproducts-41081-default-rtdb.firebaseio.com/dataTitle.json')
  }
}
