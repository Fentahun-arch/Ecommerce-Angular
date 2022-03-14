import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from './customer.object';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers = CUSTOMERS;
  constructor() {
    
  }

  ngOnInit(): void {
  }
  RemoveProduct(id: number) {
		this.customers = this.customers.filter((customers) => customers.id != id);
	}
}