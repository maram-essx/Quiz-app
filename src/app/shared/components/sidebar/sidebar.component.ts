import { Role } from './../../../core/Enums/Role.enum';
import { Component, EventEmitter, Output } from '@angular/core';
import { IMenu } from 'src/app/core/model/global';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
  isInstructor():boolean{
    return localStorage.getItem('userToken') == Role.Instructor? true : false ;
   }
   
   isStudent():boolean{
     return localStorage.getItem('userToken') == Role.Student? true : false ;
    }
   

  menu:IMenu[] = [
    {
      text: 'Dashboard',
      icon: 'bi bi-house-door',
      link: '/dashboard/home',
      isActive: this.isInstructor() || this.isStudent() 
    },
    {
    text:'Groups' ,
    icon: 'bi bi-people' ,
    link:'/dashboard/instructor/group',
    isActive: this.isInstructor() ,
    } ,
    {
      text:'Quizzes' ,
      icon: 'bi bi-alarm' ,
      link:'/dashboard/instructor/quiz',
      isActive: this.isInstructor() || this.isStudent() 
      } ,
      {
        text:'Results' ,
        icon: 'bi bi-journal-richtext' ,
        link:'/dashboard/instructor/result',
        isActive: this.isInstructor() || this.isStudent() 
        } ,
        {
          text:'Help' ,
          icon: 'bi bi-question-circle' ,
          link:'/dashboard/instructor/help',
          isActive: this.isInstructor() || this.isStudent() 
          } ,    
  ]


}
