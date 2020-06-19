import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopTGComponent } from './components/shop-tg/shop-tg.component';
import { ShopItemTGComponent } from './components/shop-item-tg/shop-item-tg.component';
import { ShopDetailsTGComponent } from './components/shop-details-tg/shop-details-tg.component';
import {HttpClientModule} from '@angular/common/http';
import {TGDataService} from "./services/tg-data.service";

@NgModule({
  declarations: [
    AppComponent,
    ShopTGComponent,
    ShopItemTGComponent,
    ShopDetailsTGComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TGDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
