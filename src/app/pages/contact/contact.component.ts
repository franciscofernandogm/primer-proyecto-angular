import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{Product} from "./../../models/product.model"

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private http: HttpClient){}

  products:Product[]=[];

  ngOnInit(){
    this.http.get<Product[]>("https://api.escuelajs.co/api/v1/products").subscribe((data:any)=>{
      this.products=data;
    })
  }
}
