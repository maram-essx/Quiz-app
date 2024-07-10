import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { QuizServices } from '../../services/quiz-services.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/common/helper-services/toastr.service';

@Component({
  selector: 'app-join-quiz',
  templateUrl: './Join-quiz.dialog.html',
  styleUrls: ['./Join-quiz.dialog.scss']
})
export class JoinQuizDialog{
  code:any;
  joinQuizForm = new FormGroup({
    code: new FormControl(null),
  });

  constructor(private QuizServices:QuizServices,
    private _Router:Router,
    private _ToastrService:ToastrService,
    public dialogRef: MatDialogRef<JoinQuizDialog>){

  }
  onsubmit(code: any) {
    this.QuizServices.joinQuiz(code.value).subscribe({
      next: (res: any) => {
        console.log(res.data.quiz);
        this.code=res

      },
      error: (err: any) => {
        this._ToastrService.Error(err.error.message)
      },
      complete: () => {
        this.onNoClick();
        this._Router.navigate(['/dashboard/student/quizzes/exam'],{queryParams:{quiz:this.code.data.quiz}})
      },
    });
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
