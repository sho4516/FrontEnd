import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AdminService } from "src/app/shared/admin.service";
import { Product } from "src/app/shared/ShowProduct";
import {ToastrService} from 'ngx-toastr';
import { nfapply } from 'q';

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"]
})
export class ProductUpdateComponent implements OnInit {
  id;
  model: Product;
  nff: NgForm;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public service: AdminService,
    private toast: ToastrService
  ) {}

  ngOnInit() {
    //
    // this.model = new Product();

    this.id = +this.route.snapshot.paramMap.get('id');
    this.service.getproductsById(this.id).subscribe(
      (resspose: any) => {
        console.log('Id Caught');
        this.model = resspose;
      },
      error => {
        console.log('Error Caught while fetching Id');
      }
    );
  }

  editProduct(nf: NgForm) {
    console.log(nf.value);
    const updatedProduct = nf.value;
    // updatedProduct.productId = this.id;
    return this.service
      .updateProducts(this.id, nf.value)
      .subscribe(
        (response: any) => {
         // nf.reset();
          this.toast.success("Product Updated Successfully");
        }
         );

   //  this.edititem = this.product
  }

  deleteProduct(productId) {
    const ans = confirm('do you want to delete the product');
    if (ans) {
      this.id = this.model.productId;
      this.service.deleteProductFromDb(productId).subscribe(() => {
        this.ngOnInit();
        this.toast.success("Product deleted");
      });
    }
   // location.reload();

  }
}
