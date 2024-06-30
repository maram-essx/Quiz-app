import { Component, OnInit } from '@angular/core';
import { IQuiz, IStudent } from '../../models/instructor';
import { InstructorService } from '../../services/instructor.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-instuctor-dashboard',
  templateUrl: './instuctor-dashboard.component.html',
  styleUrls: ['./instuctor-dashboard.component.scss'],
  providers: [DecimalPipe]
})
export class InstuctorDashboardComponent implements OnInit {

  upcomingQuizzes: IQuiz[] = [];
  topFiveStudents: any[] = [];

  constructor(private _InstructorService: InstructorService, private decimalPipe: DecimalPipe) {}

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
      this.topFiveStudents = students.map(student => ({
        ...student,
        avg_score: this.roundUpAndFormat(student.avg_score)
      }));
      console.log(this.topFiveStudents);
    });
  }

  roundUpAndFormat(value: number): string {
    const factor = Math.pow(10, 2); // 2 for two decimal places
    const roundedValue = Math.ceil(value * factor) / factor;
    // Use a fallback for null value
    return this.decimalPipe.transform(roundedValue, '1.2-2') || '0.00';
  }
}
