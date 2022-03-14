import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, PRODUCTS } from '../product/product.object';
@Component({
  selector: 'app-product-d',
  templateUrl: './product-d.component.html',
  styleUrls: ['./product-d.component.css']
})
export class ProductDComponent implements OnInit {
products = PRODUCTS; 
selectedProduct = new Product(); 
  newProduct = new Product();
  
  constructor(private routeA: ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
  
    this.routeA.params.subscribe(
      		param => {
        			for (let product of this.products){
          			if (product.id == param['id']){ this.selectedProduct = product; }
        			}
      		}
   		 );
  }
  updateProduct(){
    this.selectedProduct.name = this.selectedProduct.name;
    this.selectedProduct.price = this.selectedProduct.price;
    this.newProduct = new Product();
    this.route.navigateByUrl('products');
  }
  
}
