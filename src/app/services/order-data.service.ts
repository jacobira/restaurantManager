import { Injectable } from '@angular/core';
import { OrderInt } from '../interfaces/order-int';
import { ItemInt } from '../interfaces/item-int';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {

  constructor() {
    this.addOrder([{    
      name: "Salad",
      price: 10.99,
      instruct: "No onions."
    }], false);
  }

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
