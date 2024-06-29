import { IGroupsListRes2 ,IGroupsListRes, IUpdateOrAddGroup, IGroupDetailsRes} from './models/group';
import { Component, OnInit } from '@angular/core';
import { GroupService } from './services/group.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'src/app/common/helper-services/toastr.service';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';

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

  constructor(private _GroupService:GroupService, public dialog: MatDialog ,
    private _ToastrService:ToastrService
  ){}
ngOnInit(): void {
  this.onAllGroups();
}


  onAllGroups() {
    this._GroupService.getAllGroups().subscribe({
      next: (res: IGroupsListRes) => {
        this.groupList = res;
       // console.log(this.groupList)
        
      }, error: (err: HttpErrorResponse) => {
      }
    })
  }

  openAddDialog(add:boolean): void {
    const dialogRef = this.dialog.open(AddEditComponent, {
      width:'550px',
      height:'300px' ,
      data: {
        add:add
      },
    });
    dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // console.log(result);
    if (result) {
      this.addGroups(result);
    }
    });
  }
  addGroups(addNewGroup:IUpdateOrAddGroup) {
    this._GroupService.AddNewGroup(addNewGroup).subscribe({
      next:(res)=>{
      //  console.log(res)
      },
      error:(err)=>{
      // console.log(err.error.message); 
       this._ToastrService.Error( err.error.message) 
      },
      complete:()=>{  
        this.onAllGroups();
        this._ToastrService.Success('Group added sucessfully')
      }
    })
  }

  openEditDailog(id: string, edit: boolean): void {
    const dialogRef = this.dialog.open(AddEditComponent, {
      width: '550px',
      height: '300px',
      data: {
        id: id,
        edit: edit
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The update  was closed');
      //console.log(result);
      if (result) {
        this.editGroup(id, result)
      }
    }
    )
}
editGroup(id: string, data: IUpdateOrAddGroup) {
  this._GroupService.editGroup(id, data).subscribe({
    next: (res) => {
      // console.log(res)
    },
    error: (error) => {
      this._ToastrService.Error(error.error.message)
    },
    complete: () => {
      this.onAllGroups();
      this._ToastrService.Success('Group Updated sucessfully')
    }
  })
}

openDeleteDailog(id: string): void {

  const dialogRef = this.dialog.open(DeleteComponent, {
    width: '550px',
    height: '300px',
    data: {id: id,}
  });
  dialogRef.afterClosed().subscribe(result => {
    // console.log('The delete  was closed');
    //console.log(result);
    if (result) {
      this.deleteGroup(result)
    }
  });
}
deleteGroup(id: string) {
  this._GroupService.deleteGroup(id).subscribe({
    next: (res) => {
      // console.log(res);
    },
    error: (error) => {
      this._ToastrService.Error(error.error.message)
    },
    complete: () => {
      this.onAllGroups();
      this._ToastrService.Success('Group deleted sucessfully')
    }
  })
}


}
