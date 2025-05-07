import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private api : ApiService){

  }

  productsArr : Product[] = []

  ngOnInit(){
    this.api.getAll().subscribe((resp : any) => {
      console.log(resp)
      this.productsArr = resp
    })
  }
}
