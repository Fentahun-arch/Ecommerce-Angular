import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDComponent } from './product-d/product-d.component';
import { ProductComponentComponent } from './product/product.component';
import {CustomerComponent } from './customer/customer.component'
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
const routes: Routes = [
  {
    path: 'products',
    component:ProductComponentComponent,
  },
  {
    path: "Editproduct/:id",
    component:ProductDComponent,
  },
  {
    path: "customer",
    component:CustomerComponent,
  },
  {
    path: "",
    component:HomeComponent,
  },
  {
    path: "addProduct",
    component:AddProductComponent,
  },
   {
    path: "addCustomer",
    component:AddCustomerComponent,
  },
  
   {
    path: "editcustomer",
    component:EditCustomerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

