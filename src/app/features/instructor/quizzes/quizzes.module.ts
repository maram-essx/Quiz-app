import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzesRoutingModule } from './quizzes-routing.module';
import { QuizzesComponent } from './quizzes.component';
import { ViewQuizComponent } from './components/view-quiz/view-quiz.component';
import { AddEditQuizComponent } from './components/add-quiz/add-edit-quiz.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuizCodeComponent } from './components/quiz-code/quiz-code.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';

@NgModule({
  declarations: [
    QuizzesComponent,
    ViewQuizComponent,
    AddEditQuizComponent,
    QuizCodeComponent,
    QuizListComponent
  ],
  imports: [
    CommonModule,
    QuizzesRoutingModule,
    SharedModule
  ]
})
export class QuizzesModule { }
