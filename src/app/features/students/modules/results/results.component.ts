import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResultsService } from 'src/app/features/instructor/results/services/results.service';
import { IResultsRes } from '../../models/results';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  resultsLis:IResultsRes[]=[]

  constructor(private _ResultsService:ResultsService ,private _Router:Router ){

  }

  quizessResaults(): void {
    this._ResultsService.getAllResults().subscribe({
      next:(res:IResultsRes[])=>{
        this.resultsLis=res;
      }
    
    });

  }
}
