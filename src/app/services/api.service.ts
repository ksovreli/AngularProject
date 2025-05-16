import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getAll(){
    return this.http.get(`https://restaurant.stepprojects.ge/api/Products/GetAll`)
  }

  getCategory(){
    return this.http.get(`https://restaurant.stepprojects.ge/api/Categories/GetAll`)
  }

  getCategoryById(id : number){
    return this.http.get(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`)
  }

  getFiltered(){
    return this.http.get(`https://restaurant.stepprojects.ge/api/Products/GetFiltered`)
  }

  cart(postObj : any){
    return this.http.post(`https://restaurant.stepprojects.ge/api/Baskets/AddToBasket`, postObj)
  }

  getCartItems(){
    return this.http.get(`https://restaurant.stepprojects.ge/api/Baskets/GetAll`)
  }

  deleteProduct(id : number){
    return this.http.delete(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`)
  }

}
