import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import { Product } from '../shared/ShowProduct';
import { ProductDetailComponent } from '../admin/product-detail/product-detail.component';
import { Cart } from '../shared/CartModel';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
import { UserService } from '../shared/user.service';
@Component({
  providers: [ProductDetailComponent],
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

constructor(public user: UserService, public service: AdminService, private comp: ProductDetailComponent, private toast: ToastrService, private router: Router) { }

  model: any;
  Name: string;
  m = new Cart();
  userName = localStorage.getItem('name');
  role = localStorage.getItem('role');
  userIdd = localStorage.getItem('id');


  ngOnInit() {
    return this.service.getProducts().subscribe(
      (res: any) => {
        console.log(res),
        this.model = res;
      },
      err => {
        console.log(err);
      }
    );

  }

  Search() {
    if (this.Name !== '') {
    this.model = this.model.filter(res => {
        return res.productName.toLocaleLowerCase().match(this.Name.toLocaleLowerCase());
      });
    } else if (this.Name === '') {
      this.ngOnInit();
    }
  }

  AddToCart(id: number) {
    if (localStorage.getItem('id') == null) {
      this.toast.error('Login to add item to cart');
    } else {
    this.m.UserID = +localStorage.getItem('id');
    this.m.ProductID = id;
    this.m.Quantity = 1;
    this.service.CartAdd(this.m).subscribe();
    this.toast.success('Added to cart');
    }
  }

  Logout() {
    localStorage.clear();
    this.router.navigate(['/Refresh']);
  }

  ShowCart() {
    if (localStorage.getItem('role')) {
      this.router.navigate(['/cart']);
    } else {
      this.router.navigate(['/noCart']);
    }
  }

  showOrderHistory() {
    this.user.orderHistory(+localStorage.getItem('id')).subscribe();
  }
}
