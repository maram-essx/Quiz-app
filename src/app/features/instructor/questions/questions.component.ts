import { Component } from '@angular/core';
import { ResultsService } from '../results/services/results.service';
import { IQuestions } from './models/questions';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent {
  allQuestions: IQuestions[] = [];

  constructor(private _ResultsService: ResultsService) {}
  ngOnInit(): void {
    this.getResults();
  }

  getResults() {
    this._ResultsService.getAllQuestions().subscribe({
      next: (res) => {
        console.log(res);
        this.allQuestions = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
