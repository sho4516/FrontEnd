import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/shared/userModel';
@Component({
  selector: 'app-detail-edit',
  templateUrl: './detail-edit.component.html',
  styleUrls: ['./detail-edit.component.css']
})
export class DetailEditComponent implements OnInit {

  model = new UserModel();
  id;
  firstName;
  constructor(private service: UserService) { }

  ngOnInit() {
    this.id = +localStorage.getItem('id');
    this.service.Edit(this.id).subscribe(
      (resspose: any) => {
        console.log('id Caught');
        this.model = resspose;
        console.log(this.model);

      },
      error => {
        console.log('Error Caught while fetching Id');
      }
    );
  }

  editUser(nf: NgForm) {
    console.log(nf.value);
    const updatedProduct = nf.value;
    // updatedProduct.productId = this.id;
    return this.service
      .PutD(this.id, nf.value)
      .subscribe
      //   (response: any) => {
      //     if (response.succeed === true) {
      //    console.log(response);
      //   }
      // }
      ();
    // this.edititem = this.product
  }
}
