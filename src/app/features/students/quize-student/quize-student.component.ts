import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JoinQuizDialog } from './compoents/join-quiz/Join-quiz.dialog';
import { IcompletedQuiz } from './models/quizStudent';
import { QuizServices } from './services/quiz-services.service';

@Component({
  selector: 'app-quize-student',
  templateUrl: './quize-student.component.html',
  styleUrls: ['./quize-student.component.scss']
})
export class QuizeStudentComponent {
  completedQuizzes: IcompletedQuiz[] = [];
constructor( public dialog: MatDialog,private _QuizServices:QuizServices){

}

ngOnInit(): void {
this.getCompletedQuizzes();
}
JoinQuizDialoug(): void {
  const dialogRef = this.dialog.open(JoinQuizDialog, {
    data: {},
    width: '40%',
  });

  dialogRef.afterClosed().subscribe((result) => {
    console.log('The dialog was closed');
    console.log(result);
    if (result) {
    }
  });
}
getCompletedQuizzes() {
  this._QuizServices.getCompletedQuizzes().subscribe({
    next: (res) => {
      console.log(res);
      this.completedQuizzes = res;
    },
  });
}
}
