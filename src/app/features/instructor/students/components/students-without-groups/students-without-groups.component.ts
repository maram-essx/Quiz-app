import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { IStudentWithoutGroup } from '../../models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-students-without-groups',
  templateUrl: './students-without-groups.component.html',
  styleUrls: ['./students-without-groups.component.scss']
})
export class StudentsWithoutGroupsComponent {
  studentsWithoutGroup!: IStudentWithoutGroup[];
  paginatedStudentData: IStudentWithoutGroup[] = [];
  totalRecords: number = 0;
  rows: number = 10;
  first: number = 0;

  private _StudentsService = inject(StudentService);

  ngOnInit(): void {
    this.getStudentsWithoutGroup();
  }

  getStudentsWithoutGroup(): void {
    this._StudentsService.getStudentsWithoutGroup().subscribe({
      next: (res: IStudentWithoutGroup[]) => {
        this.studentsWithoutGroup = res;
        this.totalRecords = res.length;
       
      },
      error: (error: HttpErrorResponse) => {
        
      }
    });
  }
}
