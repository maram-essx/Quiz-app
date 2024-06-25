import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: '', redirectTo:'auth',pathMatch:'full' },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: 'instructor', loadChildren: () => import('./features/instructor/instructor.module').then(m => m.InstructorModule) }, 
  { path: 'students', loadChildren: () => import('./features/students/students.module').then(m => m.StudentsModule) },
  
  { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
