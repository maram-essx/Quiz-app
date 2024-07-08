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
    title: string = ''
  questionID:string= ''
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
    status: '',
    instructor: '',
    difficulty: '',
    points: 0,
    type: '', 
  };
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
    if(this.data.id){
      this.questionID=this.data.id
      console.log(this.data.id)
      this.title = 'Update question'
      this.getQuestion()
      if(this.data.view){
        this.title = 'View question'
        this.addEditForm.disable();
      }
    }else{
      this.title = 'Set up a new question'
    }
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
  getQuestion():void{
    this._QuestionsService.getQuestionById(this.questionID).subscribe({
      next: (res)=>{
        this.questionDetails = res
      },error: (err)=>{
      },
      complete:()=>{
        this.addEditForm.patchValue({
          title: this.questionDetails.title,
          description: this.questionDetails.description,
          options: {
            A: this.questionDetails.options.A,
            B: this.questionDetails.options.B,
            C: this.questionDetails.options.C,
            D: this.questionDetails.options.D
          },
          answer: this.questionDetails.answer,
          difficulty: this.questionDetails.difficulty,
          type: this.questionDetails.type
        })
      }
    })
  }
  onSubmit():void{
    if(this.addEditForm.valid){
      if(this.data.id){
        this._QuestionsService.editQuestion(this.questionID, this.addEditForm.value).subscribe({
          next: (res)=>{
            this._ToastrService.Success(res.message)
          },error: (err)=>{
            this._ToastrService.Error(err.error.message)
          },
          complete:()=>{
            this.onNoClick()
          }
        })
      }else{
        this._QuestionsService.AddNewQuestion(this.addEditForm.value).subscribe({
          next: (res)=>{
            this._ToastrService.Success(res.message)
          },error:(err)=>{
            this._ToastrService.Error(err.error.message)
          },complete:()=>{
            this.onNoClick()
          }
        })
      }
    }

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onAnswerChange(event: any) {
    this.selectedAnswer = event.target.value;
  }
  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
  }
  onDifficultyChange(event: any) {
    this.selectedDifficulty = event.target.value;
  }
}
