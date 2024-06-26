import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InstuctorDashboardComponent } from '../instructor/components/instuctor-dashboard/instuctor-dashboard.component';

const routes: Routes = [{ path: '', component: DashboardComponent, children: [
{path:'', redirectTo:'instructor',pathMatch:'full'},
  { path: 'instructor', loadChildren: () => import('../instructor/instructor.module').then(m => m.InstructorModule) }, 
  { path: 'student', loadChildren: () => import('../students/students.module').then(m => m.StudentsModule) },
  
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
