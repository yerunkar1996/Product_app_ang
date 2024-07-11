import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { CartComponent } from './Component/cart/cart.component';
import { ClientsComponent } from './Component/clients/clients.component';

const routes: Routes = [
  {
    path:'', component:ProductDetailsComponent
  },
  {
    path:'cart', component:CartComponent
  },
  {
    path:'users', component:ClientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
