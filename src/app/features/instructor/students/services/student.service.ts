import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent, IStudentWithoutGroup, IAddStudToGroupReq, IAddStudToGroupRes, Root, IStudentWithoutGroupRes, IDeleteStudentRes } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _HttpClient: HttpClient) { }

  getAllStudents(): Observable<IStudent[]> {
    return this._HttpClient.get<IStudent[]>('student')
  }

  getStudentsWithoutGroup(): Observable<IStudentWithoutGroup[]> {
    return this._HttpClient.get<IStudentWithoutGroup[]>('student/without-group')
  }


  addStudToGroup(data: IAddStudToGroupReq): Observable<IAddStudToGroupRes> {
    return this._HttpClient.get<IAddStudToGroupRes>(`student/${data.student_id}/${data.group_id}`);
  }

  //delete student from group
  deleteStudGroup(stId: string, groupId: string): Observable<IAddStudToGroupRes> {
    return this._HttpClient.delete<IAddStudToGroupRes>(`student/${stId}/${groupId}`);
  }

  //update student group   =>not work
  updateStudGroup(student_id:string ,group_id:string): Observable<any> {
    return this._HttpClient.put<any>(`student/${student_id}/${group_id}` , group_id);
  }
  studentsWithoutGroup(): Observable<Root> {
    return this._HttpClient.get<Root>('student/without-group')
  }

  //get student by id
  getStudent(id: string): Observable<IStudentWithoutGroupRes> {
    return this._HttpClient.get<IStudentWithoutGroupRes>(`student/${id}`)
  }

  //delte student by id
  deletStudent(id: string): Observable<IDeleteStudentRes> {
    return this._HttpClient.delete<IDeleteStudentRes>(`student/${id}`)
  }

}
