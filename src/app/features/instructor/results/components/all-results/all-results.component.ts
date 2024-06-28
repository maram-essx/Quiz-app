import { Component } from '@angular/core';
import { ResultsService } from '../../services/results.service';
import { Resultss } from '../../models/resultss';

@Component({
  selector: 'app-all-results',
  templateUrl: './all-results.component.html',
  styleUrls: ['./all-results.component.scss']
})
export class AllResultsComponent {

allresults:Resultss[]=[]

constructor (private _ResultsService:ResultsService){}
ngOnInit(): void {
  this.getResults()
}

getResults(){
  this._ResultsService.getAllResults().subscribe({
    next:res=>{
      console.log(res);
      this.allresults = res      
    },
    error:err=>{
      console.log(err);
      
    }
  })
}
}
