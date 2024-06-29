import { Component } from '@angular/core';
import { InstructorService } from '../services/instructor.service';
import { PageEvent } from '@angular/material/paginator';
import { IStudentData } from '../models/instructor';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IGroupsListRes2 } from '../groups/models/group';
import { IAddStudToGroupReq, IAddStudToGroupRes } from './models/student';
import { StudentService } from './services/student.service';
import { GroupService } from '../groups/services/group.service';

interface IStudentsRouting {
  label: string;
  url?: string;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {



  allGroups: IGroupsListRes2[] = [];

  btnText: string = 'Add Student';
  btnIcon: string = 'fa fa-plus-circle';
  studentsRouting: IStudentsRouting[] = [
    { label: 'All Students', url: '/dashboard/instructor/students' },
    
    {
      label: 'Students without group',
      url: '/dashboard/instructor/students/students-without-group',
    },
    { label: 'Groups' },
  ];

 

  data: IAddStudToGroupReq = {
    group_id: '',
    student_id: '',
  };

  constructor(
    private _StudentsService: StudentService,
    private _GroupsService: GroupService,
    private _Router: Router
  ) {}
  
  ngOnInit(): void {
    this.getAllGroups();
  }

  getAllGroups(): void {
    this._GroupsService.onGetAllGroups().subscribe({
      next: (res: IGroupsListRes2[]) => {
        this.allGroups = res;
      
      }
    });
  }


  // add student to group
  addStudToGroup(data: IAddStudToGroupReq) {
    this._StudentsService.addStudToGroup(data).subscribe({
      next: (res: IAddStudToGroupRes) => {
      },
      error: (err: HttpErrorResponse) => {
      },
      complete: () => {
        // call getallstudents function
      },
    });
  }



  // allStudents:IStudentData[] = [];

  // constructor(private _InstructorService: InstructorService) {}

  // ngOnInit(): void {
  //   // this.upComingExams();

  //   this.getAllStudents();
  // }
  // // upComingExams(): void {
  // //   this._InstructorService.upComingFive().subscribe((quizzes) => {
  // //     this.upcomingQuizzes = quizzes;
  // //     console.log(this.upcomingQuizzes);

  // //   });
  // // }

  // getAllStudents(): void {
  //   this._InstructorService.allStudents().subscribe((students) => {
  //     this.allStudents = students;
  //     console.log(this.allStudents);
  //   });

  // }

  //  // Handle Paginator ...
  //  pageSizeOptions = [5, 10, 25];
  //  hidePageSize = false;
  //  showPageSizeOptions = true;
  //  showFirstLastButtons = true;
  //  disabled = false;

  //  pageNumber: number = 0;
  //  pageSize: number = 10;
  //  pageEvent!: PageEvent;

  //  handlePageEvent(e: PageEvent) {
  //    this.pageEvent = e;
  //    this.pageSize = e.pageSize;
  //    this.pageNumber = e.pageIndex;
  //    this.getAllStudents()
  //  }

}
