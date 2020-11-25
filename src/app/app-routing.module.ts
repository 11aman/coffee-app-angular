import { CartComponent } from './cart/cart.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetStartComponent } from './get-start/get-start.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';



const routes: Routes = [
  {path:'',component:GetStartComponent},
  {path:'product',component:ProductComponent},
  {path:'cart',component:CartComponent},
  {path:'order',component:OrderComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
