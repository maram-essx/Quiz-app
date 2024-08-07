import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzesComponent } from './quizzes.component';
import { ViewQuizComponent } from './components/view-quiz/view-quiz.component';


const routes: Routes = [
 
  { path: '', component: QuizzesComponent, title: 'Quizzes', },
  { path: 'view-quiz/:id', component: ViewQuizComponent, title: 'View Quiz'},
  { path: 'quiz-list', component: QuizListComponent, title: 'Quiz list'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizzesRoutingModule {}
