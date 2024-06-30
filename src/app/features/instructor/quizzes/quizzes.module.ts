import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzesRoutingModule } from './quizzes-routing.module';
import { QuizzesComponent } from './quizzes.component';
import { ViewQuizComponent } from './components/view-quiz/view-quiz.component';
import { AddQuizComponent } from './components/add-quiz/add-quiz.component';


@NgModule({
  declarations: [
    QuizzesComponent,
    ViewQuizComponent,
    AddQuizComponent
  ],
  imports: [
    CommonModule,
    QuizzesRoutingModule
  ]
})
export class QuizzesModule { }
