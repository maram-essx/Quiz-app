import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  role: string = '';
  constructor(private _HttpClient:HttpClient) { }
  forgotPass(evalue:string):Observable<any>{
    return this._HttpClient.post('auth/forgot-password',{email:evalue})
  }
}
