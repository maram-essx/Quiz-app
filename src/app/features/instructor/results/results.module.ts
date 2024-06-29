import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results.component';
import { AllResultsComponent } from './components/all-results/all-results.component';
import { ViewResultComponent } from './components/view-result/view-result.component';


@NgModule({
  declarations: [
    ResultsComponent,
    AllResultsComponent,
    ViewResultComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule
  ]
})
export class ResultsModule { }
