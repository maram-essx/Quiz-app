import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { GroupsComponent } from './components/groups/groups.component';
import { StudentsWithoutGroupsComponent } from './components/students-without-groups/students-without-groups.component';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentsListComponent,
    GroupsComponent,
    StudentsWithoutGroupsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
