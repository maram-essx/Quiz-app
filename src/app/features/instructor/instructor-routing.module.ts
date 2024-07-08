import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorComponent } from './instructor.component';
import { InstuctorDashboardComponent } from './components/instuctor-dashboard/instuctor-dashboard.component';
import { ViewProfileComponent } from 'src/app/shared/components/view-profile/view-profile.component';

const routes: Routes = [
  { path: '', component: InstructorComponent ,children:[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:InstuctorDashboardComponent},


  ] },
  { path: 'groups', loadChildren: () => import('./groups/groups.module').then(m => m.GroupsModule) },
  { path: 'results', loadChildren: () => import('./results/results.module').then(m => m.ResultsModule) },

  { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },
  { path: 'questions', loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule) },{
    path:'profile' , component:ViewProfileComponent },

  {
    path: 'students',
    loadChildren: () =>
      import('./students/students.module').then((m) => m.StudentsModule),
  },
  { path: 'quizzes', loadChildren: () => import('./quizzes/quizzes.module').then(m => m.QuizzesModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstructorRoutingModule {}
