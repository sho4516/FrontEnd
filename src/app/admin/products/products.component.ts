import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';
import { Category } from 'src/app/shared/show-category';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 constructor(public service: AdminService, private toast: ToastrService) { }
  ngOnInit() {
  }
  category: Category;
  onSub()
  {
    this.service.getCategory().subscribe(
      (res: any) => {
        this.category = res;
        console.log(res);
      }
    );
  }

  onSubmit()
  {
    return this.service.Loadproducts().subscribe(

      (res: any)=>{
        this.toast.success("Product added successfully");
        this.service.formModelProduct.reset();
      }
    );
  }
}
