import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'src/app/common/helper-services/toastr.service';
import { IGroupDetailsRes, IStudent } from 'src/app/features/instructor/groups/models/group';
import { GroupService } from 'src/app/features/instructor/groups/services/group.service';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  studentsGroup: IStudent[] = [];
  groupDetails: IGroupDetailsRes = {
    _id: '',
    name: '',
    status: '',
    instructor: '',
    students: this.studentsGroup,
    max_students: 0
  }
  constructor(private _GroupService:GroupService , private _ToastrService:ToastrService
   , public dialogRef: MatDialogRef<DeleteComponent>,

    public _DialogRef:DialogRef,@Inject(DIALOG_DATA) public data: {comp:string,id:string,name:string}
  ) {}

// ngOnInit() {
//   if(this.data.id != null){
//     this.veiwGroup(this.data.id);
//   }
// }
// veiwGroup(id: string) {
//   this._GroupService.getGroupById(id).subscribe({
//     next: (res: IGroupDetailsRes) => {
//        console.log(res);
//       this.groupDetails = res;

//     }, error: (err) => {
//        this._ToastrService.Error(err.error.message)
//     }
//   })
// }
onNoClick(): void {
    this.dialogRef.close();
  }
}
