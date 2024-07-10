import { TestBed } from '@angular/core/testing';

import { ResultStudentService } from './result-student.service';

describe('ResultStudentService', () => {
  let service: ResultStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
