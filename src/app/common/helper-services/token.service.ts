import { Injectable } from '@angular/core';
import {Auth} from '../../features/auth/model/Auth';
import { Role } from 'src/app/core/Enums/Role.enum';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
private static readonly TOKEN_KEY='token';
private static readonly user_KEY='user';

constructor() { }
setUserData(data: {token:string,user:Auth.IProfile}) {
  this.setToken(data.token)
  this.setUser(data.user)
}

setToken(token: string):void{
  localStorage.setItem(TokenService.TOKEN_KEY, token);
}

setUser(user:Auth.IProfile):void{
  localStorage.setItem(TokenService.user_KEY, JSON.stringify(user));
}

getToken(): string {
  return localStorage.getItem(TokenService.TOKEN_KEY) || "";
}

getUser(): Auth.IProfile{
  if (this.getToken()) {
    let userJson = localStorage.getItem(TokenService.user_KEY) || ""
    return userJson?JSON.parse(userJson):{} as Auth.IProfile;
  }
  else return {} as  Auth.IProfile;
}
 

getRole(){
  const user =this.getUser()
  return  user?.role
}

isInstructor():boolean{
 return this.getRole()===Role.Instructor;
}


isStudent():boolean{
  return this.getRole()===Role.Student;
}
}
