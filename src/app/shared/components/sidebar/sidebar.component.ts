import { Role } from './../../../core/Enums/Role.enum';
import { Component, EventEmitter, Output } from '@angular/core';
import { IMenu } from 'src/app/core/model/global';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
  @Output() isOpenedValue = new EventEmitter<boolean>();
  isOpened:boolean = true;


  isInstructor():boolean{
    return localStorage.getItem('role') == Role.Instructor? true : false ;
   }

   isStudent():boolean{
     return localStorage.getItem('role') == Role.Student? true : false ;
    }


  menu:IMenu[] = [
    {
      text: 'Dashboard',
      icon: 'bi bi-house-door',
      link: '/dashboard/instructor/home',
      isActive: this.isInstructor() || this.isStudent()
    },
    {
    text:'Groups' ,
    icon: 'bi bi-people' ,
    link:'/dashboard/instructor/groups',
    isActive: this.isInstructor() ,
    } ,
    {
      text:'Quizzes' ,
      icon: 'bi bi-alarm' ,
      link:'/dashboard/instructor/quizzes',
      isActive: this.isInstructor() || this.isStudent()
      } ,

      {
        text:'Students' ,
        icon: 'bi bi-people' ,
        link:'/dashboard/instructor/students',
        isActive: this.isInstructor() || this.isStudent()
        } ,

        {
          text:'Questions' ,
          icon: 'bi bi-clipboard2-check' ,
          link:'/dashboard/instructor/questions',
          isActive: this.isInstructor()
          } ,
      {
        text:'Results' ,
        icon: 'bi bi-journal-richtext' ,
        link:'/dashboard/instructor/results',
        isActive: this.isInstructor() || this.isStudent()
        } ,
        {
          text:'Help' ,
          icon: 'bi bi-question-circle' ,
          link:'/dashboard/instructor/help',
          isActive: this.isInstructor() || this.isStudent()
          } ,
  ]

  onClicked() {
    this.isOpened = !this.isOpened;
    this.isOpenedValue.emit(this.isOpened);
    console.log(this.isOpened)
  }
  


}
