import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IQuestions, IQuestionsRes } from '../models/questions';

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
  // deleteQuestion(id:string):Observable<any>{
  //   return this._HttpClient.delete<any>(`question/${id}`)
  // }

  // editQuestion(id:string, editData:any):Observable<any>{
  //   return this._HttpClient.put<any>(`question/${id}`,editData)
  // }
  AddNewQuestion(addNewQuestion:IQuestions):Observable<any>{
    return this._HttpClient.post<any>(`question`,addNewQuestion)
  }
  deleteQuestion(id: string):Observable<any>{
    return this._HttpClient.delete(`question/${id}`)
  }

}
