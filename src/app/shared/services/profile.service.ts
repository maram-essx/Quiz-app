import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _HttpClient:HttpClient, private _Router:Router) { }

  updateInstructorProfile(data:any):Observable<any>{
    return this._HttpClient.put('instructor',data)
  }

  updateStudentProfile(data:any):Observable<any>{
    console.log('STUDENT: ',data);

    return this._HttpClient.put('student',data)
  }
}
