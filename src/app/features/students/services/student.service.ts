import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResultsRes } from '../models/results';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _HttpClient:HttpClient) { }

  getAllResults(): Observable<IResultsRes[]> {
    return this._HttpClient.get<IResultsRes[]>('quiz/result')
  }

  getIncommingQuzzes(): Observable<any[]> {
    return this._HttpClient.get<any[]>('quiz/incomming')
  }
}
