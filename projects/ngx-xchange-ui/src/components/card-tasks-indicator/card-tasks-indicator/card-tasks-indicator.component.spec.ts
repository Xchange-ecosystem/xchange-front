import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTasksIndicatorComponent } from './card-tasks-indicator.component';

describe('CardTasksIndicatorComponent', () => {
  let component: CardTasksIndicatorComponent;
  let fixture: ComponentFixture<CardTasksIndicatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTasksIndicatorComponent]
    });
    fixture = TestBed.createComponent(CardTasksIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
