import { Injectable } from '@angular/core';
import { OrderInt } from '../interfaces/order-int';
import { ItemInt } from '../interfaces/item-int';
import { HttpService } from '../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {

  constructor(private _http: HttpService) {}

  currDate: number;
  orderCount: number = 1;
  orders: OrderInt[] = [];

  addOrder(items: ItemInt[], toGoValue: boolean){

    this.orders.push({
      date: this.currDate,
      orderNum: this.orderCount,
      items: items,
      toGo: toGoValue,
      complete: false
    });

    console.log(`Order ${this.orderCount} has been submitted.`);
    this.orderCount++;
  }

}
