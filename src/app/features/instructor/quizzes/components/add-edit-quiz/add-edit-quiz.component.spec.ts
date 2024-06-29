import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditQuizComponent } from './add-edit-quiz.component';

describe('AddEditQuizComponent', () => {
  let component: AddEditQuizComponent;
  let fixture: ComponentFixture<AddEditQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditQuizComponent]
    });
    fixture = TestBed.createComponent(AddEditQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
