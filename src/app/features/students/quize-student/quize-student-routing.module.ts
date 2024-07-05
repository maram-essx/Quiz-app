import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizeStudentComponent } from './quize-student.component';

const routes: Routes = [{ path: '', component: QuizeStudentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizeStudentRoutingModule { }
