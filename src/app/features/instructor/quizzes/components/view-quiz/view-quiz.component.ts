import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'src/app/common/helper-services/toastr.service';
import { AddEditComponent } from '../../../groups/components/add-edit/add-edit.component';
import { IQuestionsRes } from '../../../questions/models/questions';
import { QuestionsService } from '../../../questions/services/questions.service';
import { IQuizzes } from '../../models/iQuizzes';
import { QuizzesService } from '../../services/quizzes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AddEditQuizComponent } from '../add-quiz/add-edit-quiz.component';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.scss'],
})
export class ViewQuizComponent {
  quizId:string='';
  quizDetails:IQuizzes={
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
  }
  mockQuizData: string[] = [
    'Quizzes',
    ' Data Structures Quiz 1',
    'answer',
    'category',
    'difficulty',
  ];

 

  constructor(private _QuizzesService:QuizzesService,  private _dialog: MatDialog, private _Router:Router,private _ActivatedRoute:ActivatedRoute) { }
  ngOnInit(){
  this.quizId=this._ActivatedRoute.snapshot.params['id'];
  this.getQuizById();
 
  }
  getQuizById(){
    this._QuizzesService.getQuizById(this.quizId).subscribe({
     next:(res:IQuizzes)=>{
      this.quizDetails=res
      console.log(this.quizDetails);
      console.log(res);
      
     },
     error:()=>{},
     complete:()=>{}
    })
  }

  isFormDisabled: boolean = true;

  disableForm() {
    this.isFormDisabled = true;
  }

  enableForm() {
    this.isFormDisabled = false;
  }
  openEiditQuizDailog(quizDetails:IQuizzes){
    const dialogRef = this._dialog.open(AddEditQuizComponent, {
      data: quizDetails 
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (quizDetails._id) {
          this.editQuiz(result);
        } 
      }
    });
  }
  editQuiz(model:FormGroup){
  console.log(model);
  
  }
 
}
