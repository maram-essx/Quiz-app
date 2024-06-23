import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient, private _Router:Router) { }

  register(userData:FormData):Observable<any>{
    return this._HttpClient.post<any>('admin/users',userData)
  }
  role: string = '';
  
}
