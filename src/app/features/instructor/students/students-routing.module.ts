import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { GroupsComponent } from './components/groups/groups.component';
import { StudentsWithoutGroupsComponent } from './components/students-without-groups/students-without-groups.component';

const routes: Routes = [
  { path: '', component: StudentsComponent ,
    children:[
      { path: '', component: StudentsListComponent, title: 'Student List' },

      { path: 'students', component: StudentsComponent },
      { path: 'groups/:id', component:GroupsComponent,title: 'Groups'},
      { path: 'students-without-group', component:StudentsWithoutGroupsComponent , title: 'Students without group',},
  
    ],
  },
 


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
