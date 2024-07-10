import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizeStudentComponent } from './quize-student.component';
import { ExamComponent } from './compoents/exam/exam.component';


const routes: Routes = [
   { path: '', component: QuizeStudentComponent },
   {path:'exam', component:ExamComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizeStudentRoutingModule { }
