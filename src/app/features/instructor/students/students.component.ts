import { Component } from '@angular/core';
import { InstructorService } from '../services/instructor.service';
import { PageEvent } from '@angular/material/paginator';
import { IStudentData } from '../models/instructor';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IGroupsListRes2 } from '../groups/models/group';
import { IAddStudToGroupReq, IAddStudToGroupRes } from './models/student';
import { StudentService } from './services/student.service';
import { GroupService } from '../groups/services/group.service';
import { MenuItem } from 'primeng/api';
import { ToastrService } from 'src/app/common/helper-services/toastr.service';
import { AddEditComponent } from '../groups/components/add-edit/add-edit.component';
import { AddStudentGroupComponent } from './components/add-student-group/add-student-group.component';

interface IStudentsRouting {
  label: string;
  url?: string;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  items: MenuItem[] = [];

  allGroups: IGroupsListRes2[] = [];

  btnText: string = 'Add Student';
  btnIcon: string = 'fa fa-plus-circle';
  studentsRouting: IStudentsRouting[] = [
    { label: 'All Students', url: '/dashboard/instructor/students' },
    
    {
      label: 'Students without group',
      url: '/dashboard/instructor/students/students-without-group',
    },
    { label: 'Groups' },
  ];

 

  data: IAddStudToGroupReq = {
    group_id: '',
    student_id: '',
  };

  constructor(

    private _StudentsService: StudentService,
    private _GroupsService: GroupService,
    private _Router: Router,
     public dialog: MatDialog ,
    private _ToastrService:ToastrService
  ) {}
  
  ngOnInit(): void {
    this.getAllGroups();
  }

  getAllGroups(): void {
    this._GroupsService.onGetAllGroups().subscribe({
      next: (res: IGroupsListRes2[]) => {
        this.allGroups = res;
      this.groupsItem()
      }
    });
  }

  groupsItem(): void {
    this.items = this.allGroups.map(group => ({
      label: group.name,
      icon: 'pi pi-users',
      command: () => {
        this._Router.navigate([`/dashboard/instructor/students/groups/${group._id}`])
      }
    }));
  }
  // add student to group
  addStudToGroup(data: IAddStudToGroupReq) {
    this._StudentsService.addStudToGroup(data).subscribe({
      next: (res: IAddStudToGroupRes) => {
      },
      error: (err: HttpErrorResponse) => {
      },
      complete: () => {
        // call getallstudents function
      },
    });
 



  //   openEditDailog(id: string, edit: boolean): void {
  //     const dialogRef = this.dialog.open(AddEditComponent, {
  //       width: '550px',
  //       height: '300px',
  //       data: {
  //         id: id,
  //         edit: edit
  //       }
  //     });
  //     dialogRef.afterClosed().subscribe(result => {
  //       // console.log('The update  was closed');
  //       //console.log(result);
  //       if (result) {
  //         this.editGroup(id, result)
  //       }
  //     }
  //     )
  // }

    
  }

  openAddDailog(
  
  ): void {
    this.dialog.open(AddStudentGroupComponent, {
      width: '550px',
      height: '300px',
      
    });
  }


}
