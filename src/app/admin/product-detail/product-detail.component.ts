import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AdminService } from 'src/app/shared/admin.service';
import {ToastrService} from 'ngx-toastr';
import { Cart } from 'src/app/shared/CartModel';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  m = new Cart();
  role = localStorage.getItem('role');

  constructor(public route: ActivatedRoute, public service: AdminService, private toast: ToastrService) { }
  productId: number;
  productArray;
  products: any;
  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('id');
    console.log(this.productId);
    this.service.getproductsById(this.productId).subscribe(
      (res: any) => {
        console.log(res),
        this.products = res;
        this.productArray = this.products.productDescription.split('|');
      },
      err => {
        console.log(err);
      }
    );
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



  // fun()
  // {
  //   this.service.getproductsById(this.productId).subscribe(
  //     (res: any) => {
  //       console.log(res),
  //       this.products = res;
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }

}
