import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/CartModel';
import { AdminService } from '../shared/admin.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  model = new Cart();
  cart: any;

  constructor(private service: UserService) { }

  ngOnInit() {
   return this.service.orderHistory(+localStorage.getItem('id')).subscribe(
      (res: any) => {
        this.cart = res;
        console.log(+localStorage.getItem('id'));
        console.log(this.cart);
      }
    );

  }

}
