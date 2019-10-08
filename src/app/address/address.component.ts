import { Component, OnInit } from '@angular/core';
import { AddressService } from '../shared/address.service';
import { ToastrService } from 'ngx-toastr';
import { Cart } from '../shared/CartModel';
import { AdminService } from '../shared/admin.service';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addresses;
  model = new Cart();
  cart: any;

  constructor(public service: AddressService, private toast: ToastrService, public service1: AdminService) { }

  ngOnInit() {
    this.model.UserID = +localStorage.getItem('id');
    return this.service1.getCart(this.model).subscribe(
      (res: any) => {
        this.cart = res;
        console.log(this.cart);
      }
    );
  }

  onSubmit() {
    this.toast.success('order placed');
    this.service1.updateCart(this.model.UserID).subscribe(
      (res: any) => {
        console.log(res);
      }
    );

  }

  getAddress() {
    this.service.GetAddress(+localStorage.getItem('id')).subscribe(
      (res: any) => {
        console.log(res);
        this.addresses = res;
        this.ngOnInit();
      }
    );
  }



}
