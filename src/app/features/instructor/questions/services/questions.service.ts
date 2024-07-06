import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IQuestions, IQuestionsRes } from '../models/questions';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private _HttpClient:HttpClient) { }

  getAllQuestions():Observable<any>{
    return this._HttpClient.get('question')
  }
  getQuestionById(id:string):Observable<any>{
    return this._HttpClient.get<any>(`question/${id}`)
  }
  AddNewQuestion(addNewQuestion:IQuestions):Observable<any>{
    return this._HttpClient.post<any>(`question`,addNewQuestion)
  }
  editQuestion(id: string, data: FormGroup):Observable<any>{
    return this._HttpClient.put(`question/${id}`, data)
  }
  deleteQuestion(id: string):Observable<any>{
    return this._HttpClient.delete(`question/${id}`)
  }

}
