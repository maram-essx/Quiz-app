import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddEditComponent } from '../../../groups/components/add-edit/add-edit.component';
import { IGroupDetailsRes } from '../../../groups/models/group';
import { GroupService } from '../../../groups/services/group.service';
import { IStudent } from '../../../models/instructor';
import { IQuestions, IOptions } from '../../models/questions';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-add-edit-question',
  templateUrl: './add-edit-question.component.html',
  styleUrls: ['./add-edit-question.component.scss'],
})
export class AddEditQuestionComponent {
  selectedStudents: string[] = [];
  studentsGroup: IStudent[] = [];
  questionDetails: IQuestions = {
    _id: '',
    title: '',
    description: '',
    options: {
      A: '',
      B: '',
      C: '',
      D: '',
      _id: '',
    },
    answer: '',
    difficulty: '',
    points: 0,
    type: '',
    status: '',
  instructor: '',
  };
  allStudentForAddNewGroup!: any;
  allStudentForUpdatingGroup: any;
  addEditForm!: FormGroup;

  selectedCategory: string = '';
  categories: string[] = ['FE', 'BE', 'DO'];

  constructor(
    private _QuestionsService: QuestionsService,
    public dialogRef: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data.id != null) {
      this.veiwQuestion(this.data.id);
    }

    this.getAllStudents();

    this.selectedStudents = this.studentsGroup.map(
      (student) => student.first_name
    );

    this.addEditForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      // options: new FormControl('', [Validators.required]),
      A: new FormControl('', [Validators.required]),
      B: new FormControl('', [Validators.required]),
      C: new FormControl('', [Validators.required]),
      D: new FormControl('', [Validators.required]),
      answer: new FormControl('', [Validators.required]),
      difficulty: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
    });
  }
  veiwQuestion(id: string) {
    this._QuestionsService.getQuestionById(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.questionDetails = res;
      },
      error: (err) => {
        //console.log(err)
      },
    });
  }
  onSubmit(addEditForm: FormGroup) {
    this.dialogRef.close(addEditForm.value);
    console.log(addEditForm.value);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  getAllStudents() {
    this._QuestionsService.getAllQuestions().subscribe({
      next: (res) => {
        console.log(res);
        this.allStudentForUpdatingGroup = res;
        console.log(this.allStudentForUpdatingGroup);
      },
    });
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
    console.log('Selected category:', this.selectedCategory);
  }
}
