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
    this.getAllQuestions();
    // this.onAllQuestion();
  }

  getAllQuestions() {
    this._QuestionsService.getAllQuestions().subscribe({
      next: (res) => {
       // console.log(res);
        this.allQuestions = res;
      },
      error: (err) => {
      //  console.log(err);
      },
    });
  }

  // onAllQuestion() {
  //   this._QuestionsService.getAllQuestions().subscribe({
  //     next: (res: any) => {
  //       this.questionList = res;
  //       console.log(this.questionList);
  //     },
  //     error: (err: any) => {},
  //   });
  // }

  openAddEditDialog(id?:string,view?:boolean): void {
    const dialogRef = this.dialog.open(AddEditQuestionComponent, {
      data: {
        id: id,
        view: view,
      }   
     });
    dialogRef.afterClosed().subscribe(result => { 
      this.getAllQuestions()
    });
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
deleteQuestion(id:string):void{
  this._QuestionsService.deleteQuestion(id).subscribe({
    next: (res) => {
      this._ToastrService.Success(res.message)
    },
    error: (err) => {
      this._ToastrService.Error(err.error.message)
    },
    complete: () => {
      this.getAllQuestions();
    }
  })
}
  

}
