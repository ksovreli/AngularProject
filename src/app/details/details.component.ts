import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

productsArr: Product[] = []
  constructor(private router : ActivatedRoute, private api : ApiService){
    this.router.params.subscribe(data => {
      console.log(data['id'])
      this.productId = data['id']
    })
  }

  productId = 0
  singleProduct?: Product

  ngOnInit(){
    this.api.getCategory(this.productId).subscribe((resp: any) => {
      console.log(resp)
      this.singleProduct = resp
    })
  }
}
