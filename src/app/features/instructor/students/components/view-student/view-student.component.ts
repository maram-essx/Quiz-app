import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GroupService } from '../../../groups/services/group.service';
import { IStudentWithoutGroupRes } from '../../models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent implements OnInit {
  studentDetails: IStudentWithoutGroupRes = {
    _id: '',
    email: '',
    first_name: '',
    last_name: '',
    role: '',
    status: ''
  };

  constructor( private _GroupsService: GroupService, private _StudentsService: StudentService,
    public dialogRef: MatDialogRef<ViewStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }





  ngOnInit(): void {
    this.veiwStudent(this.data.id);
  }

  veiwStudent(id: string) {
    this._StudentsService.getStudent(id).subscribe({
      next: (res: IStudentWithoutGroupRes) => {
        this.studentDetails = res;
      }, error: (err: HttpErrorResponse) => {
      }
    })
  }
}
