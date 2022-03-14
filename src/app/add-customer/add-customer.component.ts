import { Component, OnInit } from '@angular/core';
import { Customer, CUSTOMERS } from '../customer/customer.object';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  cutomerList = CUSTOMERS;
  newCustomer = new Customer
  id: number
  constructor() {
    this.id = 0;

  }

  ngOnInit(): void {
  }
  addcustomer(customer: any) {
    this.id = this.cutomerList.length
    let customers = { id: this.id, name: customer.name, imageUrl: customer.imgUrl,  email: customer.email,gender: customer.gender }
    
    this.cutomerList.push(customers);

  }
}