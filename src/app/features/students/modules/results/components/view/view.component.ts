import { Component, OnInit } from '@angular/core';
import { ResultStudentService } from '../../result-student.service';
import { IResultsRes } from 'src/app/features/students/models/results';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  quizName:string='';
  quizDetails: IResultsRes =   {
    quiz: {
      _id: '',
      code: '',
      title: '',
      description: '',
      status: '',
      instructor: '',
      group: '',
      questions_number: 0
      , schadule: '',
      duration: 0
      , score_per_question: 0
      , type: '',
      difficulty: '',
      updatedAt: '',
      createdAt: '',
      __v: 0,
      closed_at: '',

    },
    result: {
      _id: '',
      quiz: {
        _id: '',
        title: '',
      },
      participant: {
        _id: '',
        first_name: '',
        last_name: '',
        email: '',
      },
      score: 0,
      started_at: '',
      finished_at: ''
    }
  }




  constructor(private _ResultStudentService: ResultStudentService) { }

  ngOnInit(): void {
    this._ResultStudentService.result$.subscribe((result) => {
      this.quizDetails = result;
      console.log(result)
      this.quizName=this.quizDetails.quiz.title;
    });
  }

}
