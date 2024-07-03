import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { GroupsComponent } from './components/groups/groups.component';
import { StudentsWithoutGroupsComponent } from './components/students-without-groups/students-without-groups.component';
import { AddStudentGroupComponent } from './components/add-student-group/add-student-group.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentsListComponent,
    GroupsComponent,
    StudentsWithoutGroupsComponent,
    AddStudentGroupComponent,
    DeleteStudentComponent

  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule
  ]
})
export class StudentsModule { }
