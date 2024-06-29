import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzesRoutingModule } from './quizzes-routing.module';
import { QuizzesComponent } from './quizzes.component';
import { AddEditQuizComponent } from './components/add-edit-quiz/add-edit-quiz.component';
import { ViewQuizComponent } from './components/view-quiz/view-quiz.component';


@NgModule({
  declarations: [
    QuizzesComponent,
    AddEditQuizComponent,
    ViewQuizComponent
  ],
  imports: [
    CommonModule,
    QuizzesRoutingModule
  ]
})
export class QuizzesModule { }
