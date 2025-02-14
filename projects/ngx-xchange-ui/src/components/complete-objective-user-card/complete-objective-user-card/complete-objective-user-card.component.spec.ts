import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteObjectiveUserCardComponent } from './complete-objective-user-card.component';

describe('CompleteObjectiveUserCardComponent', () => {
  let component: CompleteObjectiveUserCardComponent;
  let fixture: ComponentFixture<CompleteObjectiveUserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteObjectiveUserCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompleteObjectiveUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
