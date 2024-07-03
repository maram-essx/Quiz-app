import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzesComponent } from './quizzes.component';
import { AddQuizComponent } from './components/add-quiz/add-quiz.component';
import { ViewQuizComponent } from './components/view-quiz/view-quiz.component';

const routes: Routes = [
  { path: '', redirectTo: 'quizzes', pathMatch: 'full' },
  { path: 'quizzes', component: QuizzesComponent, title: 'Quizzes' },
  { path: 'view-quiz', component: ViewQuizComponent, data: { title: 'View Quiz' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizzesRoutingModule {}
