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

  constructor(private _HttpClient:HttpClient) { }
  forgotPass(evalue:string):Observable<any>{
    return this._HttpClient.post('auth/forgot-password',{email:evalue})
  }

  // constructor(private _HttpClient:HttpClient, private _Router:Router,) { }




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

}
