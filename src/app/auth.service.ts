import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  LoggedInUser(){ 
    return !!localStorage.getItem('token');
   }
}
