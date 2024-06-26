import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorRoutingModule } from './instructor-routing.module';
import { InstructorComponent } from './instructor.component';
import { InstuctorDashboardComponent } from './components/instuctor-dashboard/instuctor-dashboard.component';


@NgModule({
  declarations: [
    InstructorComponent,
    InstuctorDashboardComponent
  ],
  imports: [
    CommonModule,
    InstructorRoutingModule
  ]
})
export class InstructorModule { }
