import { Component, OnInit } from '@angular/core';
import { Product, PRODUCTS } from '../product/product.object';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productList = PRODUCTS;
  newProduct = new Product;
  id: number;
  constructor() {
    this.id = 0;
   }

  ngOnInit(): void {

  }
  addProduct(product: any) {
   this. id=this.productList.length
    let products =  { id: this.id, name: product.name, imageUrl:product.imgUrl,price: product.price,description:product.description}
    
    this.productList.push(products);
  

    
  }

}
