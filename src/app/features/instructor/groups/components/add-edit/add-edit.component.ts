import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GroupService } from '../../services/group.service';
import { IStudent, IGroupDetailsRes } from '../../models/group';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent {
  selectedStudents: string[]=[];
  studentsGroup: IStudent[] = [];
  groupDetails: IGroupDetailsRes = {
    _id: '',
    name: '',
    status: '',
    instructor: '',
    students: this.studentsGroup,
    max_students: 0
  }
  allStudentForAddNewGroup!:any ;
  allStudentForUpdatingGroup:any;
  addEditForm!: FormGroup ;
  constructor(private _GroupService:GroupService , public dialogRef: MatDialogRef<AddEditComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any){}

ngOnInit(): void {
  if(this.data.id != null){
    this.veiwGroup(this.data.id);
  }

  this.getAllStudentsWithoutGroup();
  this.getAllStudents();

this.selectedStudents = this.studentsGroup.map(student => student.first_name);


this.addEditForm = new FormGroup({
  name: new FormControl('', [Validators.required]),
      students: new FormControl([],),
})
}
veiwGroup(id: string) {
  this._GroupService.getGroupById(id).subscribe({
    next: (res: IGroupDetailsRes) => {
       console.log(res);
      this.groupDetails = res;

    }, error: (err) => {
       //console.log(err)
    }
  })
}
onSubmit(addEditForm:FormGroup) { 
  this.dialogRef.close(addEditForm.value);
  console.log(addEditForm.value)
}
onNoClick(): void {
  this.dialogRef.close();
}

getAllStudentsWithoutGroup(){
  this._GroupService.getAllStudentsForAddGroup().subscribe({
    next:(res)=>{
       console.log(res);
       this.allStudentForAddNewGroup=res
       console.log(this.allStudentForAddNewGroup)
    }
  });
 }
 getAllStudents(){
   this._GroupService.getAllStudents().subscribe({
    next:(res)=>{
      console.log(res);
      this.allStudentForUpdatingGroup=res
      console.log(this.allStudentForUpdatingGroup)
   }
   })
 }


}
