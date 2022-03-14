import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product,PRODUCTS } from './product.object';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css'],

})
export class ProductComponentComponent implements OnInit {
	product = new Product();
	
	productList = PRODUCTS;
		 
	constructor(private router: Router) {
		console.log("product called");
	}

	ngOnInit(): void {
		console.log('Event-Binding');

	}
	onEditProduct(id: number) {
		console.log(id)
		this.router.navigateByUrl("Editproduct/" + id);

	}
	deleteProduct(id: number) {
		this.productList = this.productList.filter((productList) => productList.id != id);
	}
}