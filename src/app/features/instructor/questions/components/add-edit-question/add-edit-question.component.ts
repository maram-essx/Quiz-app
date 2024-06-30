import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddEditComponent } from '../../../groups/components/add-edit/add-edit.component';
import { IQuestions, IOptions, IQuestionsRes } from '../../models/questions';
import { QuestionsService } from '../../services/questions.service';
import { ToastrService } from 'src/app/common/helper-services/toastr.service';

@Component({
  selector: 'app-add-edit-question',
  templateUrl: './add-edit-question.component.html',
  styleUrls: ['./add-edit-question.component.scss'],
})
export class AddEditQuestionComponent {
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
  allQuestionsForAddNewQuestion!: any;
  allQuestionsForUpdatingQuestion: any;
  addEditForm!: FormGroup;

  selectedAnswer: string = '';
  answers: string[] = ['A', 'B', 'C', 'D'];

  selectedCategory: string = '';
  categories: string[] = ['FE', 'BE', 'DO'];

  selectedDifficulty: string = '';
  difficulties: string[] = ['easy', 'medium', 'hard'];

  constructor(
    private _QuestionsService: QuestionsService,
    public dialogRef: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _ToastrService: ToastrService
  ) {}

  ngOnInit(): void {
    if (this.data.id != null) {
      this.viewQuestion(this.data.id);
    }

    this.getAllQuestions();



    this.addEditForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      options: new FormGroup({
        A: new FormControl('', [Validators.required]),
        B: new FormControl('', [Validators.required]),
        C: new FormControl('', [Validators.required]),
        D: new FormControl('', [Validators.required])
      }),
      answer: new FormControl('', [Validators.required]),
      difficulty: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
    });
  }
  viewQuestion(id: string) {
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
    this.addQuestion(addEditForm);
    this.getAllQuestions();
  }

  addQuestion(addEditForm: FormGroup): void {
    if (addEditForm.valid) {
      console.log('Question data:', addEditForm.value);
      this._QuestionsService.AddNewQuestion(addEditForm.value).subscribe({
        next: (res: IQuestionsRes) => {
          console.log(res);
        },
        error: (err) => {
          console.error('Question error:', err);
          this._ToastrService.Error(err.error.message);
        },
        complete: () => {
          this.onNoClick();
          this._ToastrService.Success('Quesion added sucessfully');
        }
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getAllQuestions() {
    this._QuestionsService.getAllQuestions().subscribe({
      next: (res) => {
        console.log('getAllQuestions: ', res);
        this.allQuestionsForUpdatingQuestion = res;
        console.log(this.allQuestionsForUpdatingQuestion);
      },
    });
  }

  onAnswerChange(event: any) {
    this.selectedAnswer = event.target.value;
    console.log('Selected answer:', this.selectedAnswer);
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
    console.log('Selected category:', this.selectedCategory);
  }

  onDifficultyChange(event: any) {
    this.selectedDifficulty = event.target.value;
    console.log('Selected difficulty:', this.selectedDifficulty);
  }
}
