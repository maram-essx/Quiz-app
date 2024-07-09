import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IQuiz } from '../../models/instructor';
import { IGroup, IQuizResponse, IQuizzes } from '../models/iQuizzes';

@Injectable({
  providedIn: 'root',
})
export class QuizzesService {
  constructor(private _HttpClient: HttpClient) {}

  upComingFive(): Observable<IQuiz[]> {
    return this._HttpClient.get<IQuiz[]>('quiz/incomming');
  }

  allQuizzes(): Observable<IQuizzes[]> {
    return this._HttpClient.get<IQuizzes[]>('quiz');
  }

  allGroups(): Observable<IGroup> {
    return this._HttpClient.get<IGroup>('group/');
  }

  addQuiz(quizData: any): Observable<any> {
    return this._HttpClient.post('quiz', quizData);
  }

  editQuiz(quizId:string,data: {}): Observable<any> {
    return this._HttpClient.put(`quiz/${quizId}`, data);
  }
  getQuizById(id:string):Observable<IQuizzes>{
    return this._HttpClient.get<IQuizzes>(`quiz/${id}` ) 
  }

}
