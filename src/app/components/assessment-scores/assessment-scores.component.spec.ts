import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentScoresComponent } from './assessment-scores.component';

describe('AssessmentScoresComponent', () => {
  let component: AssessmentScoresComponent;
  let fixture: ComponentFixture<AssessmentScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssessmentScoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
