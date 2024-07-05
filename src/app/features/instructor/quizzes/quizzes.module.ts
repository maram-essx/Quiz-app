import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzesRoutingModule } from './quizzes-routing.module';
import { QuizzesComponent } from './quizzes.component';
import { ViewQuizComponent } from './components/view-quiz/view-quiz.component';
import { AddQuizComponent } from './components/add-quiz/add-quiz.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuizCodeComponent } from './components/quiz-code/quiz-code.component';


@NgModule({
  declarations: [
    QuizzesComponent,
    ViewQuizComponent,
    AddQuizComponent,
    QuizCodeComponent
  ],
  imports: [
    CommonModule,
    QuizzesRoutingModule,
    SharedModule
  ]
})
export class QuizzesModule { }
