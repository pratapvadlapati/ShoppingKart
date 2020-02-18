import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

//login service call

  login(user){
    return this._http.post('http://localhost:3000/api/user/login', user)
  }

 isLoggedin(){
   return !!localStorage.getItem('token');
 }

}
