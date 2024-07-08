import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizeStudentRoutingModule } from './quize-student-routing.module';
import { QuizeStudentComponent } from './quize-student.component';


@NgModule({
  declarations: [
    QuizeStudentComponent
  ],
  imports: [
    CommonModule,
    QuizeStudentRoutingModule
  ]
})
export class QuizeStudentModule { }
