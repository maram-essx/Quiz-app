import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzesComponent } from './quizzes.component';
import { AddQuizComponent } from './components/add-quiz/add-quiz.component';

const routes: Routes = [{ path: '', redirectTo:'All-Quizzes',pathMatch:'full'},
  {path:'All-Quizzes',component: QuizzesComponent,title:'Quizzes'},
  // {path:'Add-Quiz',component: AddQuizComponent,title:'Set up quiz'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzesRoutingModule { }
