 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorComponent } from './instructor.component';
import { InstuctorDashboardComponent } from './components/instuctor-dashboard/instuctor-dashboard.component';

const routes: Routes = [
  { path: '', component: InstructorComponent ,children:[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:InstuctorDashboardComponent},


  ] },
  { path: 'groups', loadChildren: () => import('./groups/groups.module').then(m => m.GroupsModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
