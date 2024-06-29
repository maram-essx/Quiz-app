import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsWithoutGroupsComponent } from './students-without-groups.component';

describe('StudentsWithoutGroupsComponent', () => {
  let component: StudentsWithoutGroupsComponent;
  let fixture: ComponentFixture<StudentsWithoutGroupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsWithoutGroupsComponent]
    });
    fixture = TestBed.createComponent(StudentsWithoutGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
