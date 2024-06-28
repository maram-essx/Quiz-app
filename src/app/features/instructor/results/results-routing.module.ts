import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './results.component';
import { AllResultsComponent } from './components/all-results/all-results.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{ path: '', redirectTo:'allresults',pathMatch:'full'},{path:'allresults',component:AllResultsComponent,title:'All Results'}];

@NgModule({
  imports: [RouterModule.forChild(routes),SharedModule,HttpClientModule],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
