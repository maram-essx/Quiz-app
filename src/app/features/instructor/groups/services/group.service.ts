import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGroupsListRes, IGroupDetailsRes, IUpdateOrAddGroup, IUdateGroupRes } from '../models/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private _HttpClient: HttpClient) { }

  getAllGroups(): Observable<IGroupsListRes> {
    return this._HttpClient.get<IGroupsListRes>(`group`)
  }

  getGroupById(id:string):Observable<IGroupDetailsRes>{
    return this._HttpClient.get<IGroupDetailsRes>(`group/${id}`)
  }
  deleteGroup(id:string):Observable<IGroupDetailsRes>{
    return this._HttpClient.delete<IGroupDetailsRes>(`group/${id}`)
  }
  
  editGroup(id:string, editData:IUpdateOrAddGroup):Observable<IUdateGroupRes>{
    return this._HttpClient.put<IUdateGroupRes>(`group/${id}`,editData)
  }
  AddNewGroup(addNewGroup:IUpdateOrAddGroup):Observable<any>{
    return this._HttpClient.post<IUdateGroupRes>(`group`,addNewGroup)
  }
}
