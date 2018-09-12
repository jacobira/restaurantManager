import { Component, OnInit } from '@angular/core';
import { OrderDataService } from '../services/order-data.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  constructor(private _orderData: OrderDataService) { }

  ngOnInit() {
    console.log(this._orderData.orders);
  }

  //orders is a map of keys and values from the service's orders prop
  orders = this._orderData.orders;
}
