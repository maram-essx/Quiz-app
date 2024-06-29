import { Component } from '@angular/core';
import { GroupService } from '../../../groups/services/group.service';
import { ActivatedRoute } from '@angular/router';
import { Resultss, groupp } from '../../models/resultss';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.scss']
})
export class ViewResultComponent {
  id:any = ''
  group!:groupp
  allres:Resultss[]=[]
  single!:Resultss 
constructor(private _GroupService:GroupService,private _ActivatedRoute:ActivatedRoute,private _ResultsService:ResultsService){}
ngOnInit(): void {
  this.id = this._ActivatedRoute.snapshot.params['id']
  this.getGroupById()
  this.getAllres()
}
getGroupById(){
 this._GroupService.getGroupById(this.id).subscribe({
  next:res=>{
    this.group = res
    console.log(this.group);
  },
  error:err=>{
    console.log(err);
  }
 })   
}
getAllres(){
  this._ResultsService.getAllResults().subscribe({
    next:(res)=>{
      this.allres = res
      console.log(this.allres);
      for(let i = 0;i<this.allres.length;i++){
        if(this.id = this.allres[i].quiz.group){
          this.single = this.allres[i]
          console.log('after',this.single);
          break
        }
      }
    },
    error:err=>{
      console.log(err);
      
    }
  })
}

}
