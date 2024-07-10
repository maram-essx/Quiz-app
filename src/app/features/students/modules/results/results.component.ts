import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultsService } from 'src/app/features/instructor/results/services/results.service';
import { IResultsRes } from '../../models/results';
import { ResultStudentService } from './result-student.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent  implements OnInit{

  resultsLis:IResultsRes[]=[]

  constructor(private _ResultStudentService:ResultStudentService ,private _Router:Router ){

  }
  ngOnInit(): void {
    this.quizessResaults()
  }

  viewFunction(row: any): void {
    console.log('View', row);

  }
  quizessResaults(): void {
    this._ResultStudentService.getAllResults().subscribe({

      next:(res:IResultsRes[])=>{
        this.resultsLis=res;
        console.log(this.resultsLis);
      }
    
    });

  }



  
  viewResults( row: IResultsRes): void {
    this._ResultStudentService.getResultView(row);
   this._Router.navigate(['/dashboard/student/results/view'])
  }

}
