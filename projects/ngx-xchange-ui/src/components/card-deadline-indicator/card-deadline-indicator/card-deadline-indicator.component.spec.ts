import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDeadlineIndicatorComponent } from './card-deadline-indicator.component';

describe('CardDeadlineIndicatorComponent', () => {
  let component: CardDeadlineIndicatorComponent;
  let fixture: ComponentFixture<CardDeadlineIndicatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDeadlineIndicatorComponent]
    });
    fixture = TestBed.createComponent(CardDeadlineIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
