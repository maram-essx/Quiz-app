import { IGroupsListRes2 ,IGroupsListRes} from './models/group';
import { Component, OnInit } from '@angular/core';
import { GroupService } from './services/group.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
 
  IGroupsListRes2: IGroupsListRes2 = {
    _id: '',
    name: '',
    status: '',
    instructor: '',
    students: [],
    max_students: 0
  }
  groupList: IGroupsListRes2[] = [this.IGroupsListRes2];

  constructor(private _GroupService:GroupService)
{

}
ngOnInit(): void {
  this.onAllGroups();


}
  onAllGroups() {
    this._GroupService.getAllGroups().subscribe({
      next: (res: IGroupsListRes) => {
        this.groupList = res;
        console.log(this.groupList)
        
      }, error: (err: HttpErrorResponse) => {
      }
    })
  }
}
