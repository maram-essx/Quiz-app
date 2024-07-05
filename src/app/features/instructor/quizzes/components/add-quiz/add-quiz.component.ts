import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'src/app/common/helper-services/toastr.service';
import { AddEditComponent } from '../../../groups/components/add-edit/add-edit.component';
import { IQuestions, IQuestionsRes } from '../../../questions/models/questions';
import { QuestionsService } from '../../../questions/services/questions.service';
import {MatDatepickerInputEvent, MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { IQuizzes, IQuizQuestion, IGroups, IGroup } from '../../models/iQuizzes';
import { QuizzesService } from '../../services/quizzes.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent {
  quizDetails: IQuizzes = {
    _id: '',
    code: '',
    title: '',
    description: '',
    status: '',
    instructor: '',
    group: '',
    questions_number: 0,
    questions: [],
    schadule: '',
    duration: 0,
    score_per_question: 0,
    type: '',
    difficulty: '',
    updatedAt: '',
    createdAt: '',
    __v: 0,
    closed_at: '',
    participants: 0,
  };

  // allQuestionsForUpdatingQuestion: any;
  quizForm!: FormGroup;

  selectedDuration: string = '';
  durations: string[] = ['5', '10', '15', '20', '25', '30', '40', '50', '60', '90', '100', '120'];
  numberOfQuestions: string = '';
  selectedCategory: string = '';
  categories: string[] = ['FE', 'BE', 'DO'];
  allGroups!: IGroup;
  selectedGroup: string | null = null;

  selectedDifficulty: string = '';
  difficulties: string[] = ['easy', 'medium', 'hard'];
  date: Date | null = null;
  time: string | null = null;

  constructor(
    private _QuizzesService: QuizzesService,
    public dialogRef: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _ToastrService: ToastrService,
    private fb: FormBuilder
  ) {
    this.quizForm = this.fb.group({
      group: [''],
      schedule: ['']
    });
  }

  ngOnInit(): void {
    // if (this.data.id != null) {
    //   this.viewQuestion(this.data.id);
    // }
    this.getGroups()



    this.quizForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      group: new FormControl('', [Validators.required]),
      questions_number: new FormControl('', [Validators.required]),
      difficulty: new FormControl('', [Validators.required]),
      schadule: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required]),
      score_per_question: new FormControl('', [Validators.required]),
    });
  }
  // viewQuestion(id: string) {
  //   this._QuestionsService.getQuestionById(id).subscribe({
  //     next: (res: any) => {
  //       console.log(res);
  //       this.quizDetails = res;
  //     },
  //     error: (err) => {
  //       //console.log(err)
  //     },
  //   });
  // }
  onSubmit(quizForm: FormGroup) {
    console.log('ADD QUIZ FORM',quizForm);

    this.dialogRef.close(quizForm.value);
    this.addQuiz(quizForm);
  }

  addQuiz(quizForm: FormGroup): void {
    if (quizForm.valid) {
      console.log('Quiz data:', quizForm.value);
      this._QuizzesService.addQuiz(quizForm.value).subscribe({
        next: (res: any) => {
          console.log(res);
        },
        error: (err) => {
          console.error('Quiz error:', err);
          this._ToastrService.Error(err.error.message);
        },
        complete: () => {
          this.onNoClick();
          this._ToastrService.Success('Quiz added sucessfully');
        }
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getGroups() {
    this._QuizzesService.allGroups().subscribe({
      next: (res) => {
        console.log('allGroups: ', res);
        this.allGroups = res;
        console.log(this.allGroups);
      },
    });
  }

  onGroupChange(event: any) {
    this.selectedGroup = event.target.value;
    console.log('Selected Group ID:', this.selectedGroup);
  }

  onDurationChange(event: any) {
    this.selectedDuration = event.target.value;
    console.log('Selected Duration:', this.selectedDuration);
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
    console.log('Selected category:', this.selectedCategory);
  }

  onDifficultyChange(event: any) {
    this.selectedDifficulty = event.target.value;
    console.log('Selected difficulty:', this.selectedDifficulty);
  }

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    this.date = event.value;
    console.log('Date Change: ', this.date);
    this.updateSchedule();

  }

  onTimeChange(event: any) {
    this.time = event.target.value;
    console.log('Time Change: ', this.time);
    this.updateSchedule();
  }

  updateSchedule() {
    if (this.date && this.time) {
      console.log('Schedule Change: ', this.date, this.time);
      const date = new Date(this.date);
      const [hours, minutes] = this.time.split(':').map(Number);
      date.setHours(hours, minutes);

      this.quizForm.patchValue({
        schadule: date.toISOString()
      });

      console.log('Schedule:', this.quizForm.value.schadule);
    }
  }

}
