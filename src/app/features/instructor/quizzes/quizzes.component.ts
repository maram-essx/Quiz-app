import { Component } from '@angular/core';
import { IQuizzes } from './models/iQuizzes';
import { QuizzesService } from './services/quizzes.service';
import { IQuiz } from '../models/instructor';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss'],
})
export class QuizzesComponent {
  allQuizzes: IQuizzes[] = [];
  quizList: any[] = [];
  completedQuizList: any[] =[];
  openQuizList: any[] =[];
  upcomingQuizzes: IQuiz[] = [];
  defaultImg: string = '../../../../assets/images/Default-img.svg'

  constructor(private _QuizzesService: QuizzesService) {}

  ngOnInit() {
    this.upComingExams();
    this.onAllQuizzes();
    this.completedQuizzes();
  }

  upComingExams(): void {
    this._QuizzesService.upComingFive().subscribe((quizzes) => {
      this.upcomingQuizzes = quizzes;
      console.log(this.upcomingQuizzes);
    });
  }

  onAllQuizzes(): void {
    this._QuizzesService.allQuizzes().subscribe({
      next: (res: any) => {
        this.quizList = res;
        console.log('QUIZ LIST' , this.quizList);
      },
      error: (err: any) => {},
    });
  }

  completedQuizzes(): void {
    this._QuizzesService.allQuizzes().subscribe((data: any[]) => {

        this.completedQuizList = data.filter(item => item.status === 'closed');
        console.log('COMPLETED QUIZ LIST' , this.completedQuizList);
    });
  }

}
