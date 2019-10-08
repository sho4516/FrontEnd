import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import { Cart } from '../shared/CartModel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  model = new Cart();
  cart: any;
  m = new Cart();
  totalPrice: number;

  constructor(private service: AdminService) { }

  ngOnInit() {
      this.model.UserID = +localStorage.getItem('id');
      return this.service.getCart(this.model).subscribe(
        (res: any) => {
          this.cart = res;
          console.log(this.cart);
        }
      );

  }

  funAdd(id: number)
  {
    this.m.UserID = +localStorage.getItem('id');
    this.m.ProductID = id;
    this.m.Quantity = 1;
    this.service.CartAdd(this.m).subscribe((res: any) => {
      this.ngOnInit();
      this.funTotal();
    });
  }

  funSub(id: number)
  {
    this.m.UserID = +localStorage.getItem('id');
    this.m.ProductID = id;
    this.m.Quantity = 1;
    this.service.cartRemove(this.m).subscribe((res: any) => {
      this.ngOnInit();
      this.funTotal();
    });
  }

  funClear(id: number)
  {
    this.m.UserID = +localStorage.getItem('id');
    this.m.ProductID = id;
    this.m.Quantity = 1;
    this.service.cartClear(this.m).subscribe((res: any) => {
      this.ngOnInit();

    });
  }

  funTotal()
  {
    this.m.UserID = +localStorage.getItem('id');
    this.service.getTotal(this.m).subscribe((res: any) =>
    {

      localStorage.setItem('total', res);
      this.totalPrice = +localStorage.getItem('total');
      this.ngOnInit();
    });
  }
}
