import { Injectable } from '@angular/core';
import {  IQuiz, IStudent, IStudentData } from '../models/instructor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private _HttpClient: HttpClient) {}

  upComingFive(): Observable<IQuiz[]> {
    return this._HttpClient.get<IQuiz[]>('quiz/incomming')
  }

  topFiveStudents(): Observable<IStudent[]> {
    return this._HttpClient.get<IStudent[]>('student/top-five')
  }

  allStudents(): Observable<IStudentData[]> {
    return this._HttpClient.get<IStudentData[]>('student')
  }
}
