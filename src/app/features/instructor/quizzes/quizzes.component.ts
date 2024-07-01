import { Component } from '@angular/core';
import { IQuizzes } from './models/iQuizzes';
import { QuizzesService } from './services/quizzes.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss'],
})
export class QuizzesComponent {
  allQuizzes: IQuizzes[] = [];
  quizList: any[] = [];

  constructor(private _QuizzesService: QuizzesService) {}
}
