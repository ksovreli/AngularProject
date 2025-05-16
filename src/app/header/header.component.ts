import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  
  
    constructor(private api : ApiService){
  
    }
  
    productsArr : Product[] = []
    welcomeUsername!: string

    greeting!: string
    getFromChild(text : any){
      this.greeting = text
    }

}
