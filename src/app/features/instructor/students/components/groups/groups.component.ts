import { Component, inject } from '@angular/core';
import { IGroupDetailsRes, IStudent } from '../../../groups/models/group';
import { GroupService } from '../../../groups/services/group.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { DeleteStudentComponent } from '../delete-student/delete-student.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent {
  group_id:string='';
  private _GroupsService = inject(GroupService);
  private _ActivatedRoute = inject(ActivatedRoute);
  private _StudentsService = inject(StudentService);
  public dialog = inject(MatDialog);
  studentsDetails!: IStudent[];
  paginatedStudentData!: IStudent[];
  totalRecords: number = 0;
  rows: number = 10;
  first: number = 0;
  studentDetails:any;

  ngOnInit(): void {
    this.onCheckRoute();
  }

  onGetSpecificGroup(id: string): void {
    this._GroupsService.getGroupById(id).subscribe({
      next: (res: IGroupDetailsRes) => {
        this.studentsDetails = res.students;
        this.totalRecords = this.studentsDetails.length;
        this.updatePaginatedData();
      },
      error: (error: HttpErrorResponse) => {}
    });
  }

  onCheckRoute(): void {
    this._ActivatedRoute.params.subscribe((params: Params) => {
      this.onGetSpecificGroup(params['id']);
    });
  }

  updatePaginatedData(): void {
    const start = this.first;
    const end = this.first + this.rows;
    this.paginatedStudentData = this.studentsDetails.slice(start, end);
  }

  onPageSizeChange(size: number): void {
    this.rows = size;
    this.first = 0;
    this.updatePaginatedData();
  }

  onPageNumberChange(page: number): void {
    this.first = (page - 1) * this.rows;
    this.updatePaginatedData();
  }




  willBeDelete(event: string): any {
    let btnText = 'delete'
    const dialogRef = this.dialog.open(DeleteStudentComponent, {
      width: '570px',
      height: '350px',
      data: {
        id: event,
        btnText: btnText
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.onCheckRoute();
    })
  }

  openUpdateDailog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    stdId:string,
    btnText:string
  ): void {
    this.dialog.open(DeleteStudentComponent, {
      width: '550px',
      height: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
      data:{
        stdId:stdId,
        groupId:this.group_id,
        btnText:btnText

      }
    });
  }

  
  willBeDeleteFromGroup(event: string): any {
    let btnText = 'delete'
    const dialogRef = this.dialog.open(DeleteStudentComponent, {
      width: '570px',
      height: '350px',
      data: {
        stdId: event,
        groupId:this.group_id,
        btnText: btnText
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.onCheckRoute();
    })
  }

  willBeUpdateGroup(event: string): any {
    let btnText = 'update'
    const dialogRef = this.dialog.open(DeleteStudentComponent, {
      width: '570px',
      height: '350px',
      data: {
        stdId: event,
        groupId:this.group_id,
        btnText: btnText
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.onCheckRoute();
    })
  }

}
