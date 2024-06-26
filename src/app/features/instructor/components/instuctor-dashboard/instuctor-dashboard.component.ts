import { Component } from '@angular/core';
import { IQuiz, IStudent } from '../../models/instructor';
import { InstructorService } from '../../services/instructor.service';

@Component({
  selector: 'app-instuctor-dashboard',
  templateUrl: './instuctor-dashboard.component.html',
  styleUrls: ['./instuctor-dashboard.component.scss']
})
export class InstuctorDashboardComponent {

  upcomingQuizzes: IQuiz[] = [];
  topFiveStudents: IStudent[] = [];

  constructor(private _InstructorService: InstructorService) {}

  ngOnInit(): void {
    this.upComingExams();

    this.topStudents();
  }
  upComingExams(): void {
    this._InstructorService.upComingFive().subscribe((quizzes) => {
      this.upcomingQuizzes = quizzes;
      console.log(this.upcomingQuizzes);

    });
  }

  topStudents(): void {
    this._InstructorService.topFiveStudents().subscribe((students) => {
      this.topFiveStudents = students;
      console.log(this.topFiveStudents);
    });
 
  }

}
