import { Component } from '@angular/core';
import { GroupService } from '../../../groups/services/group.service';
import { StudentService } from '../../services/student.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IGroupsListRes } from '../../../groups/models/group';
import { Root, IAddStudToGroupRes } from '../../models/student';

@Component({
  selector: 'app-add-student-group',
  templateUrl: './add-student-group.component.html',
  styleUrls: ['./add-student-group.component.scss']
})
export class AddStudentGroupComponent {
  studentsList:Root=[];
  groupsList:IGroupsListRes=[];
  constructor(private _GroupsService:GroupService,private _StudentsService:StudentService 
 ) { }

  ngOnInit(): void {
    this.getAllGroups();
    this.getStudentsWithoutGroup()
  }

  addStudToGroupForm:FormGroup=new FormGroup({
    student_id:new FormControl(null ,[Validators.required]),
    group_id:new FormControl(null,[Validators.required])
  })

  addStudToGroup(data: FormGroup) {
    this._StudentsService.addStudToGroup(data.value).subscribe({
      next: (res: IAddStudToGroupRes) => {
      
      }, error: (err: HttpErrorResponse) => {
      }, complete: () => {
      }
    })
  }

  getAllGroups(){
    this._GroupsService.getAllGroups().subscribe({
      next:(res:IGroupsListRes)=>{
        this.groupsList=res;
      },error:(err:HttpErrorResponse)=>{
      }
    })
  }

  getStudentsWithoutGroup(){
    this._StudentsService.studentsWithoutGroup().subscribe({
      next:(res:Root)=>{
        this.studentsList=res;
      },error:(err:HttpErrorResponse)=>{
      }
    })
  }

  








}
