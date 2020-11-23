import { CartComponent } from './cart/cart.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetStartComponent } from './get-start/get-start.component';
import { ProductComponent } from './product/product.component';



const routes: Routes = [
  {path:'',component:GetStartComponent},
  {path:'product',component:ProductComponent},
  {path:'cart',component:CartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
