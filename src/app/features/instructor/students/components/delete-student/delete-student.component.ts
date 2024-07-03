import { IAddStudToGroupReq } from './../../models/student';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { IGroupsListRes } from '../../../groups/models/group';
import { IStudentWithoutGroupRes, IDeleteStudentRes, IAddStudToGroupRes } from '../../models/student';
import { GroupService } from '../../../groups/services/group.service';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.scss']
})
export class DeleteStudentComponent  {
  studentData:IStudentWithoutGroupRes={
    _id: '',
    email: '',
    first_name: '',
    last_name: '',
    role: '',
    status: ''
  };
  groupsList: IGroupsListRes = [];
  stdId: string = '';
  studentDetails: IStudentWithoutGroupRes = {
    _id: '',
    email: '',
    first_name: '',
    last_name: '',
    role: '',
    status: ''
  };


  constructor(private _ActivatedRoute: ActivatedRoute, private _GroupsService: GroupService, private _StudentsService: StudentService,
    public dialogRef: MatDialogRef<DeleteStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    // this.veiwStudent(this.data.stdId);
    this.getAllGroups();
    this.stdId = this.data.stdId;
this.getStudentById()
  }

  deletStudentFromGroup(stId: string, groupId: string) {
    this._StudentsService.deleteStudGroup(stId, groupId).subscribe({
      next: (res: IAddStudToGroupRes) => {
      },
      error: (err: HttpErrorResponse) => {
      }, complete: () => {
        this.onNoClick()
      }
    })

  }


  updateForm: FormGroup = new FormGroup({
    groupId: new FormControl('')
  })

  updateStudentGroup(stdId: string, updateForm: FormGroup) {
    this._StudentsService.updateStudGroup(stdId, updateForm.get('groupId')?.value).subscribe({
      next: (res: IAddStudToGroupRes) => {
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);


      }, complete: () => {
        this.onNoClick();
      }
    })

  }

  getStudentById()
  {
    this._StudentsService.getStudent(this.data.stdId).subscribe({
next: (res: IStudentWithoutGroupRes)=>{
this.studentData=res;
}
    })
  }
  getAllGroups() {
    this._GroupsService.getAllGroups().subscribe({
      next: (res: IGroupsListRes) => {
        this.groupsList = res;
      }, error: (err: HttpErrorResponse) => {
      }
    })
  }





 


  onNoClick(): void {
    this.dialogRef.close();
  }
}
