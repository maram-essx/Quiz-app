import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  role: string = '';
  // constructor(private _HttpClient:HttpClient, private _Router:Router,) { }

  register(userData:FormData){
    // return this._HttpClient.post<any>('auth/register',userData)
  }
}
