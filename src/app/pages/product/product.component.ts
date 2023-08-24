import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{Product} from "./../../models/product.model"

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  loading = false;

  constructor(private http: HttpClient){}

  products:Product[]=[];

  ngOnInit(){
    this.http.get<Product[]>("https://api.escuelajs.co/api/v1/products").subscribe((data:any)=>{
      this.products=data;
      this.loading = true;
    })
  }
}
