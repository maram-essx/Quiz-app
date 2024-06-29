import { Component } from '@angular/core';
import { ResultsService } from '../../services/results.service';
import { Resultss, groupp } from '../../models/resultss';
import { GroupService } from '../../../groups/services/group.service';

@Component({
  selector: 'app-all-results',
  templateUrl: './all-results.component.html',
  styleUrls: ['./all-results.component.scss']
})
export class AllResultsComponent {

allresults:Resultss[]=[]
groupId:string[]=[]
filteredData:groupp[]=[]
constructor (private _ResultsService:ResultsService,private _GroupService:GroupService){}
ngOnInit(): void {
  this.getResults()
  console.log('Filtered',this.filteredData);
  
}

getResults(){
  this._ResultsService.getAllResults().subscribe({
    next:(res)=>{
      this.allresults = res
      console.log('allres',this.allresults);
     this.groupId =  this.allresults.map(st=>st.quiz.group)
     for(let i=0; i<this.groupId.length;i++){
      console.log(this._GroupService.getGroupById(this.groupId[i]).subscribe({
        next:res=>{
          console.log('group',res);
          this.filteredData.push(res)
        }
       }));
     }
     
    },
    error:err=>{
      console.log(err);
      
    }
  })
}
}
