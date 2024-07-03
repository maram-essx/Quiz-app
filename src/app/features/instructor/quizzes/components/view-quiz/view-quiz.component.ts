import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'src/app/common/helper-services/toastr.service';
import { AddEditComponent } from '../../../groups/components/add-edit/add-edit.component';
import { IQuestionsRes } from '../../../questions/models/questions';
import { QuestionsService } from '../../../questions/services/questions.service';
import { IQuizzes } from '../../models/iQuizzes';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.scss'],
})
export class ViewQuizComponent {
  mockQuizData: string[] = [
    'Quizzes',
    ' Data Structures Quiz 1',
    'answer',
    'category',
    'difficulty',
  ];

  quizzes = [
    {title: 'Trivia 1',
      description: 'Trivia 1 Description',
      questions_number: 5,
      questions: [
        {
            _id: "667ef855c85f1ecdbc273105",
            title: "What was the first animal to ever be cloned?",
            options: {
                A: "A dog",
                B: "A cat",
                C: "A sheep",
                D: "A bird",
                _id: "667ef855c85f1ecdbc273106"
            },
            answer: "C"
        },
        {
            _id: "667ef89cc85f1ecdbc273115",
            title: "What identity document is required to travel to different countries around the world?",
            options: {
                A: "A bank card",
                B: "A ticket",
                C: "An identification card",
                D: "A passport",
                _id: "667ef89cc85f1ecdbc273116"
            },
            answer: "D"
        }
    ],
      schadule: '2024-02-15T21:19:34.000Z',
      duration: 30,
      difficulty: 'easy',
      type:'BE',
    }
  ]

  isFormDisabled: boolean = true;

  disableForm() {
    this.isFormDisabled = true;
  }

  enableForm() {
    this.isFormDisabled = false;
  }

}
