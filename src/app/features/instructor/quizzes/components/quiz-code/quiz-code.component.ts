import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-quiz-code',
  templateUrl: './quiz-code.component.html',
  styleUrls: ['./quiz-code.component.scss']
})
export class QuizCodeComponent {

  constructor(
    public dialogRef: MatDialogRef<QuizCodeComponent>, @Inject(MAT_DIALOG_DATA) public data: { code: string }, private _MatSnackBar:MatSnackBar) {}



  onNoClick(): void {
    this.dialogRef.close();
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
