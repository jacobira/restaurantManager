import { Component, OnInit, Input } from '@angular/core';
import { OrderDataService } from '../services/order-data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() orderNum;
  @Input() items;

  constructor(private _orderData: OrderDataService) { 
    
  }


  ngOnInit() {
  }


}
