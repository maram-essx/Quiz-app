import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IStudent, IStudentWithoutGroupRes } from '../../models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent {
  studentData: IStudent[] = [];
  paginatedStudentData: IStudent[] = [];
  totalRecords: number = 0;
  rows: number = 10;
  first: number = 0;


  studentDetails: IStudentWithoutGroupRes = {
    _id: '',
    email: '',
    first_name: '',
    last_name: '',
    role: '',
    status: ''
  };
  private _StudentsService = inject(StudentService);
  public dialog = inject(MatDialog);

  ngOnInit(): void {
    this.onGetAllStudents();
  }

  onGetAllStudents(): void {
    this._StudentsService.getAllStudents().subscribe({
      next: (res: IStudent[]) => {
        this.studentData = res;
        this.totalRecords = res.length;
        this.updatePaginatedData();
      },
      error: (error: HttpErrorResponse) => {}
    });
  }

  updatePaginatedData(): void {
    const start = this.first;
    const end = this.first + this.rows;
    this.paginatedStudentData = this.studentData.slice(start, end);
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



}
