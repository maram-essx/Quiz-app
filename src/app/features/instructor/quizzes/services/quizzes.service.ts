import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IQuiz } from '../../models/instructor';
import { IQuizzes } from '../models/iQuizzes';

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
}
