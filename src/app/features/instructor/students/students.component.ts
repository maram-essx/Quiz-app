import { Component } from '@angular/core';
import { InstructorService } from '../services/instructor.service';
import { PageEvent } from '@angular/material/paginator';
import { IStudentData } from '../models/instructor';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

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
