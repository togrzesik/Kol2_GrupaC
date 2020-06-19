import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopItemTGComponent} from "./components/shop-item-tg/shop-item-tg.component";
import {ShopTGComponent} from "./components/shop-tg/shop-tg.component";


const routes: Routes = [
  {
    path:"shop",
    component:ShopTGComponent
  },
  {
    path:"shop/item",
    component:ShopItemTGComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
