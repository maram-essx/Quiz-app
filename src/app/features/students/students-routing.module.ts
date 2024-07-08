import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { ViewProfileComponent } from 'src/app/shared/components/view-profile/view-profile.component';

const routes: Routes = [{ path: '', component: StudentsComponent },
  { path:'profile' , component:ViewProfileComponent },
  { path: 'quize', loadChildren: () => import('./quize-student/quize-student.module').then(m => m.QuizeStudentModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
