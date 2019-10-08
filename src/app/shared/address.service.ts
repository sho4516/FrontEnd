import { Injectable } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  formModel = this.fb.group({
    userID: [''],
    City: [''],
    Pincode:[''],
    Address1:[''],
    Address2:[''],
    HouseNumber:[''],
    State:['']

  });

  AddressAdd()
  {
    var body=
    {
    userID: localStorage.getItem('id'),
    City: this.formModel.value.City,
    Pincode: this.formModel.value.Pincode,
    Address1: this.formModel.value.Address1,
    Address2: this.formModel.value.Address2,
    HouseNumber: this.formModel.value.HouseNumber,
    State: this.formModel.value.State
     };
     return this.http.post('https://localhost:5001/api/address', body);
  }







public GetAddress(id: number)
{
  return this.http.post('https://localhost:5001/api/address/getAddress', id);

}

}
