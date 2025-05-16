import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from "../button/button.component";


@Component({
  selector: 'app-basket',
  imports: [CommonModule, FormsModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent {

  constructor(private api: ApiService) {}

  product : CartItem[] = []

  ngOnInit(){
    this.api.getCartItems().subscribe((resp : any) =>{
      console.log(resp)
      this.product = resp
    })
  }

  deleteItem(id : number){
    this.api.deleteProduct(id).subscribe(resp1 => {
      console.log("Deleted Item", resp1)
    })
  }
}

export interface Product {
  categoryId: number;
  id: number;
  image: string;
  name: string;
  nuts: boolean;
  price: number;
  spiciness: number;
  vegeterian: boolean;
}

export interface CartItem {
  price: number;
  product: Product;
  quantity: number;
}
