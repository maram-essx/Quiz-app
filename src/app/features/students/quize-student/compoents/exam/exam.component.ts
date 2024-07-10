import { Component, Input } from '@angular/core';
import { Ianswer, IQuistions, Options } from '../../models/quizStudent';
import { ToastrService } from 'src/app/common/helper-services/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { QuizServices } from '../../services/quiz-services.service';
import { MatDialog } from '@angular/material/dialog';
import { map, takeWhile, timer } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
})
export class ExamComponent {
  QuizId: string = '';
  options!: Options[];
  questions: IQuistions[] = [];
  answers: Ianswer[] = [];

  timer$: any;
  seconds = 0;

  firstFormGroup = new FormGroup({
    answer:new FormControl(null)
})
  constructor(
    private _ToastrService: ToastrService,
    public dialog: MatDialog,
    private _ActivatedRoute: ActivatedRoute,
    private QuizServices: QuizServices
  ) {}
  ngOnInit(): void {
    this._ActivatedRoute.queryParams.subscribe((params) => {
      this.QuizId = params['quiz'];
    });
    this.getQuestions(this.QuizId);
  }

  getQuestions(id:string){
    this.QuizServices.getQuestionsWiyhoutAnswer(id).subscribe({
      next:(res:any)=>{
        console.log(res);
           this.seconds=(res.data.duration)*60
          this.timer$ = timer(0, 1000).pipe(
            map(n => (this.seconds - n) * 1000),
            takeWhile(n => n >= 0)
  
          );
  
        this.questions=res.data.questions
  
        console.log(this.questions);
  
    },complete:()=>{
  
      this.timer$.subscribe((time:any) => {
  
        if (time <= 0) {
          this.submitAnswers()
        }
      });
  
    }
    })
  }

  
 addAnswers(form:FormGroup,question:string){
  console.log(form.value);
  let answer=form.value.answer
  this.answers.push({question,answer})
  console.log(this.answers);

 }
 submitAnswers(){
  this.QuizServices.submitAnswer(this.QuizId,this.answers).subscribe({
    next:(res)=>{
      console.log(res);

    },error:(err)=>{
this._ToastrService.Error(err.error.message)
    },complete:()=> {
      this._ToastrService.Success("you have submitted your answers")
    }
  })
 }
  resetForm(){
    this.answers=[]
  }
}
