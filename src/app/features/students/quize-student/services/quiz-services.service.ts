import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IQuizStudent,IQuistions,Options,Ianswer} from '../models/quizStudent'

@Injectable({
  providedIn: 'root'
})
export class QuizServices {

constructor(private _HttpClient:HttpClient) { }



joinQuiz(code: string): Observable<any> {
  return this._HttpClient.post('quiz/join', code);
}

getCompletedQuizzes(): Observable<any> {
  return this._HttpClient.get('quiz/completed');
}

getQuestionsWiyhoutAnswer(id:string): Observable<IQuizStudent> {
  return this._HttpClient.get<IQuizStudent>(`quiz/without-answers/${id}`);
}

submitAnswer(id:string,answers:Ianswer[]): Observable<Ianswer> {
  return this._HttpClient.post<Ianswer>(`quiz/submit/${id}`,{"answers":answers});
}
}
