import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component ({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService, private router: Router ) { }

  ngOnInit() {
    this.service.formModelRegister.reset();
  }
  onSubmit() {
      this.service.register().subscribe(
        (res: any) => {
          if (res.Succeed === true) {
            this.service.formModelRegister.reset();
            this.toastr.success('New User Added', 'Registration Successfull');
            this.router.navigate(['/users/Login']);
          } else {
            this.toastr.error('Email Id already Exists', 'Registration Not Successfull');
          }
        }
      );
    }
}
