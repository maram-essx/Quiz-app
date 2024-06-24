import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Auth} from '../model/Auth'


import { HttpEndPoints } from 'src/app/settings/httpsEndPoints';


import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  role: string = '';
  // constructor(private _HttpClient:HttpClient, private _Router:Router,) { }


  constructor(private _HttpClient:HttpClient) { }
  
login(loginData:Auth.ILoginReq):Observable<Auth.ILoginRes>{
  return this._HttpClient.post<Auth.ILoginRes>(HttpEndPoints.Auth.login,loginData)
 }

  register(userData:FormData){
    // return this._HttpClient.post<any>('auth/register',userData)
  }

resetPassword(data:Auth.IResetPasswordReq):Observable<Auth.IResetPasswordRes>{
  return this._HttpClient.post<Auth.IResetPasswordRes>(`auth/reset-password` , data)
}
}
