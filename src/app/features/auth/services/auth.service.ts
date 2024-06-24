import { Injectable } from '@angular/core';
import {Auth} from '../model/Auth'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpEndPoints } from 'src/app/settings/httpsEndPoints';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }
  
login(loginData:Auth.ILoginReq):Observable<Auth.ILoginRes>{
  return this._HttpClient.post<Auth.ILoginRes>(HttpEndPoints.Auth.login,loginData)
 }
}
