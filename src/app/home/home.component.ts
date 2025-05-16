import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../models/product';
import { FormsModule } from '@angular/forms';
import { Categories } from '../models/categories';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, FormsModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  rangeValue: number = 0
  selectedCategoryId: number = 0

  constructor(private api : ApiService){

  }

  productsArr : Product[] = []
  categoriesArr : Categories[] = []

  ngOnInit(){
    this.api.getAll().subscribe((resp : any) => {
      console.log(resp)
      this.productsArr = resp
    })

    this.api.getCategory().subscribe((resp1: any) => {
      console.log(resp1)
      this.categoriesArr = resp1
    })
  }
  getCategoryId(id : number) {
    this.selectedCategoryId = id
    this.api.getCategoryById(id).subscribe((resp: any) => {
      console.log(resp.products)
      this.productsArr = resp.products
  })
}

addTocart(productId: number, price: number) {
  let postObj = {
    quantity: 1,
    price: price,
    productId: productId
  }

  this.api.cart(postObj).subscribe((resp: any) => {
    console.log("Added To Cart", resp)
  })
}
}
