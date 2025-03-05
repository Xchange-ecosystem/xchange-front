import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAssessmentCardComponent } from './user-assessment-card.component';

describe('UserAssessmentCardComponent', () => {
  let component: UserAssessmentCardComponent;
  let fixture: ComponentFixture<UserAssessmentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAssessmentCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserAssessmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
