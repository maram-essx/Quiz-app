import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { IQuiz } from '../instructor/models/instructor';
import { StudentService } from '../students/services/student.service';
import { ToastrService } from 'src/app/common/helper-services/toastr.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  upcomingQuizzes: IQuiz[] = [];
  quizImg: string ='../../../assets/images/Default-img.svg';

  constructor(
    private _StudentService: StudentService,
    private decimalPipe: DecimalPipe,
    private _ToastrService: ToastrService,
    private _MatSnackBar:MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getIncommingQuzzes();
  }

  getIncommingQuzzes(): void {
    this._StudentService.getIncommingQuzzes().subscribe({
      next: (res: any) => {
        console.log('RESPONSE: ', res);
        this.upcomingQuizzes = res;
        console.log(this.upcomingQuizzes);
      },
      error: (err: any) => {
        console.error(err);
      },
      complete: () => {
        console.log('Quizzes fetched successfully');
      }
    });
  }

  copyQuizCode(quizCodeElement: HTMLElement): void {
    const quizCode = quizCodeElement.innerText;
    navigator.clipboard.writeText(quizCode).then(() => {
      console.log('Quiz code copied to clipboard');
      this._MatSnackBar.open('Quiz code copied to clipboard', 'Close', {
        duration: 2000,
      });
    }).catch(err => {
      console.error('Could not copy quiz code: ', err);
      this._MatSnackBar.open('Failed to copy quiz code', 'Close', {
        duration: 2000,
      });
    });
  }

}
