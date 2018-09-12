import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { OrderEntryComponent } from './order-entry/order-entry.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component'

import { HttpService } from './services/http.service';
import { OrderDataService } from './services/order-data.service';

import { RouterModule, Routes } from '@angular/router';

const appRoutes = [
  {path: 'home', component: HomeComponent},
  {path: 'kitchen', component: KitchenComponent },
  {path: 'order-entry', component: OrderEntryComponent},
  {path: 'payment', component: PaymentComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    KitchenComponent,
    OrderEntryComponent,
    PaymentComponent,
    OrderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    OrderDataService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
