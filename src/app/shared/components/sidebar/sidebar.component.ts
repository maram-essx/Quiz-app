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
      icon: '../../../../assets/images/Dashboard-con.svg',
      link: '/dashboard/instructor/home',
      isActive: this.isInstructor() || this.isStudent()
    },
    {
    text:'Groups' ,
    icon: '../../../../assets/images/Students-icon.svg' ,
    link:'/dashboard/instructor/groups',
    isActive: this.isInstructor() ,
    } ,
    {
      text:'Quizzes' ,
      icon: '../../../../assets/images/Quiz-icon.svg' ,
      link:'/dashboard/instructor/quizzes',
      isActive: this.isInstructor() || this.isStudent()
      } ,

      {
        text:'Students' ,
        icon: '../../../../assets/images/Students-icon.svg' ,
        link:'/dashboard/instructor/students',
        isActive: this.isInstructor() || this.isStudent()
        } ,

        {
          text:'Questions' ,
          icon: '../../../../assets/images/Quiz-icon.svg' ,
          link:'/dashboard/instructor/questions',
          isActive: this.isInstructor()
          } ,
      {
        text:'Results' ,
        icon: '../../../../assets/images/Results-icon.svg' ,
        link:'/dashboard/instructor/results',
        isActive: this.isInstructor() || this.isStudent()
        } ,
        {
          text:'Help' ,
          icon: '../../../../assets/images/question-mark-icon.svg' ,
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
