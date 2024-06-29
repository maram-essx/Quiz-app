import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { GroupsComponent } from './components/groups/groups.component';

const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students-list', component:StudentsListComponent },
  { path: 'groups', component:GroupsComponent },
  { path: 'students-list', component:StudentsListComponent },
  { path: 'students-without-group', component:StudentsListComponent },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
