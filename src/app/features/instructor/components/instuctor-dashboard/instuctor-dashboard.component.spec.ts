import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstuctorDashboardComponent } from './instuctor-dashboard.component';

describe('InstuctorDashboardComponent', () => {
  let component: InstuctorDashboardComponent;
  let fixture: ComponentFixture<InstuctorDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstuctorDashboardComponent]
    });
    fixture = TestBed.createComponent(InstuctorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
