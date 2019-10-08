import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly baseUri = 'https://localhost:5001/api';

  constructor(private fb: FormBuilder, private http: HttpClient) {}


  formModelRegister = this.fb.group({
    FirstName: ['', Validators.required],
    LastName: [''],
    Email: ['', Validators.email],
    Phone: [''],
    ProfilePic: [''],
    Role: [''],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      CpnfirmPassword: ['']
    })
  });

  formModelLogin = this.fb.group({
    Email : ['', Validators.required],
    Password : ['']
  });

    register()
    {
      var body = {
        FirstName: this.formModelRegister.value.FirstName,
        LastName: this.formModelRegister.value.LastName,
        Email: this.formModelRegister.value.Email,
        Phone: this.formModelRegister.value.Phone,
        ProfilePic: this.formModelRegister.value.ProfilePic,
        Role: this.formModelRegister.value.Role,
        Password: this.formModelRegister.value.Passwords.Password
      };
      return this.http.post(this.baseUri + '/register', body);
    }

    login()
    {
      var body1 =
      {
        Email: this.formModelLogin.value.Email,
        Password: this.formModelLogin.value.Password
      };
      return this.http.post(this.baseUri + '/Login', body1);
    }

    Edit(id: number)
    {
      return this.http.get('https://localhost:5001/api/register/' + id);
    }

    PutD(id: number, body: any)
    {
      return this.http.put('https://localhost:5001/api/register/' + id, body);
    }

    SocialLogin(object) {
      return this.http.post('https://localhost:5001/api/Login/social' , object);
    }

    orderHistory(model: number)
    {
      return this.http.post('https://localhost:5001/api/orderHistories/orderHistory', model);
    }




}
