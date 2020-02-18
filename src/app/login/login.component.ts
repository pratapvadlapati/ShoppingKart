import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 loginForm :  FormGroup;
  constructor(private _auth: AuthService,
              private _router: Router) {}
  
  //invoke login api
   onLogin()
{
 let user = this.loginForm.value
 console.log(user);
 this._auth.login(user)
 .subscribe(data=>{
  if(data == 'false'){
      this._router.navigate(['/login'])
  }else{
    localStorage.setItem('token', 'true');
    this._router.navigate(['/'])
  }
 
 })
  //console.log(this.loginForm.value);
  
}


  ngOnInit() {
    this.loginForm = new FormGroup({
      username : new FormControl(''),
      password : new FormControl('')
    })
  }

}
