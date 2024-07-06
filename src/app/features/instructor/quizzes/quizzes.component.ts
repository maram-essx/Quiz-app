import { Component } from '@angular/core';
import { IGroup, IQuizzes } from './models/iQuizzes';
import { QuizzesService } from './services/quizzes.service';
import { IQuiz } from '../models/instructor';
import { AddEditQuizComponent } from './components/add-quiz/add-edit-quiz.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'src/app/common/helper-services/toastr.service';
import { Router } from '@angular/router';

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
  allGroups!: IGroup;

  constructor(private _QuizzesService: QuizzesService,
    public dialog: MatDialog,
    private _ToastrService: ToastrService,
    private _Router: Router
  ) {}

  ngOnInit() {
    this.upComingExams();
    this.onAllQuizzes();
    this.completedQuizzes();
    this.getGroups();
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

  openAddDialog(add: boolean): void {
    const dialogRef = this.dialog.open(AddEditQuizComponent, {
      width: '75%',
      height: '75%',
      data: {
        add: add,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        this.onAllQuizzes();
      }
    });
  }

  getGroups() {
    this._QuizzesService.allGroups().subscribe({
      next: (res) => {
        console.log('allGroups: ', res);
        this.allGroups = res;
        console.log(this.allGroups);
      },
    });
  }

}
