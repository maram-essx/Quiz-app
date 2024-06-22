import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) }, { path: 'instructor', loadChildren: () => import('./features/instructor/instructor.module').then(m => m.InstructorModule) }, { path: 'students', loadChildren: () => import('./features/students/students.module').then(m => m.StudentsModule) }, { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
