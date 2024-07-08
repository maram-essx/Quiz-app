import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {Auth} from '../model/Auth'


import { HttpEndPoints } from 'src/app/settings/httpsEndPoints';


import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  role: string = '';
  first_name: string = '';
  last_name: string = '';
  email: string = '';
  status: string = '';

  constructor(private _HttpClient:HttpClient, private _Router:Router) { }
  forgotPass(evalue:string):Observable<any>{
    return this._HttpClient.post('auth/forgot-password',{email:evalue})
  }

  // constructor(private _HttpClient:HttpClient, private _Router:Router,) { }

  getRole() {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('userToken');
    const first_name = localStorage.getItem('first_name');
    const last_name = localStorage.getItem('last_name');
    const email = localStorage.getItem('email');
    const status = localStorage.getItem('status');

    if (token !== null && role !== null && first_name !== null && last_name !== null && email !== null && status !== null) {
      this.role = role;
      this.first_name = first_name;
      this.last_name = last_name;
    } else {
    }
  }


login(loginData:Auth.ILoginReq):Observable<Auth.ILoginRes>{
  return this._HttpClient.post<Auth.ILoginRes>(HttpEndPoints.Auth.login,loginData)
 }

  register(userData: Auth.IRegister):Observable<Auth.IRegisterRes>{
    console.log("USER DATA", userData);
    return this._HttpClient.post<Auth.IRegisterRes>('auth/register',userData)
  }

resetPassword(data:Auth.IResetPasswordReq):Observable<Auth.IResetPasswordRes>{
  return this._HttpClient.post<Auth.IResetPasswordRes>(`auth/reset-password` , data)
}

logout(): void {
  localStorage.clear();
  sessionStorage.clear();
  this._Router.navigate(['/auth/login'])
}
changePassword(data:any):Observable<any>{
  return this._HttpClient.post('auth/change-password',data)
}
}
