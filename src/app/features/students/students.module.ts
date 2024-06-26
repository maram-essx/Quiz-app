import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StudentsComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
  ]
})
export class StudentsModule { }
