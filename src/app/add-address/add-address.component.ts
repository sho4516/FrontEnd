import { Component, OnInit } from '@angular/core';
import { AddressService } from '../shared/address.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  constructor(public service: AddressService, private toast: ToastrService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.service.AddressAdd().subscribe(
      (res: any) => {
        console.log(res.saved);
        this.toast.success('Address Added Successfully');
        this.router.navigate(['/address']);

      }
    );
  }

}
