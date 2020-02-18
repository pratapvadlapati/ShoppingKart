import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from './auth.service';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
constructor(private _auth: AuthService,
            private _router: Router){}


            canActivate(): boolean {
              if(this._auth.isLoggedin()){
                return true
              }else{
                this._router.navigate(['/login']);
                return false;
              }
            }
}
