import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizeStudentRoutingModule } from './quize-student-routing.module';
import { QuizeStudentComponent } from './quize-student.component';
import { JoinQuizDialog } from './compoents/join-quiz/Join-quiz.dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExamComponent } from './compoents/exam/exam.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    QuizeStudentComponent,
    JoinQuizDialog,
    ExamComponent
  ],
  imports: [
    CommonModule,
    QuizeStudentRoutingModule,
    SharedModule,
    MatStepperModule,
    MatRadioModule
  ]
})
export class QuizeStudentModule { }
