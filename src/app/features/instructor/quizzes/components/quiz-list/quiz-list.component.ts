import { IQuizzes } from './../../models/iQuizzes';
import { Component, OnInit } from '@angular/core';
import { QuizzesService } from '../../services/quizzes.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {
  quizList: IQuizzes[] = [];
  constructor(private _QuizzesService:QuizzesService) { }

  ngOnInit() {
    this.allQuizzes()
  }

  allQuizzes(): void {
    this._QuizzesService.allQuizzes().subscribe({
      next: (res: IQuizzes[]) => {
        this.quizList = res;
      },
      error: (err: any) => {},
    });
  }

}
