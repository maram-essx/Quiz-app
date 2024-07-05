import { Component } from '@angular/core';
import { ResultsService } from '../results/services/results.service';
import { IQuestions } from './models/questions';
import { QuestionsService } from './services/questions.service';
import { AddEditQuestionComponent } from './components/add-edit-question/add-edit-question.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'src/app/common/helper-services/toastr.service';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent {
  allQuestions: IQuestions[] = [];
  questionList: any[] = [];

  constructor(
    private _QuestionsService: QuestionsService,
    public dialog: MatDialog,
    private _ToastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.getResults();
    this.onAllQuestion();
  }

  getResults() {
    this._QuestionsService.getAllQuestions().subscribe({
      next: (res) => {
        console.log(res);
        this.allQuestions = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  openAddDialog(add: boolean): void {
    const dialogRef = this.dialog.open(AddEditQuestionComponent, {
      data: {
        add: add,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        this.onAllQuestion();
      }
    });
  }

  addQuestion(addNewQuestion: any) {
    this._QuestionsService.AddNewQuestion(addNewQuestion).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err.error.message);
        this._ToastrService.Error(err.error.message);
      },
      complete: () => {
        this.onAllQuestion();
        this._ToastrService.Success('Quesion added sucessfully');
      },
    });
  }

  onAllQuestion() {
    this._QuestionsService.getAllQuestions().subscribe({
      next: (res: any) => {
        this.questionList = res;
        console.log(this.questionList);
      },
      error: (err: any) => {},
    });
  }

  deleteQuestion(id:string):void{
    this._QuestionsService.deleteQuestion(id).subscribe({
      next: (res) => {
        // console.log(res)
        this._ToastrService.Success(res.message)

      },
      error: (err) => {
        this._ToastrService.Error(err.error.message)


      },
      complete: () => {
        this.getResults();
      }

    })
  }

  openDeleteDialog(id:string,name:string,componentName:string): void {
    const dialo =this.dialog.open(DeleteComponent, {
      width: '500px',

      data:{
        comp:componentName,
        id:id,
        name:name
      }
    });
    dialo.afterClosed().subscribe(res=>{
      if(res){
       this.deleteQuestion(res)
      }
    })
  }

}
