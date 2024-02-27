import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWelcomeMeasurementsComponent } from './card-welcome-measurements.component';

describe('CardWelcomeMeasurementsComponent', () => {
  let component: CardWelcomeMeasurementsComponent;
  let fixture: ComponentFixture<CardWelcomeMeasurementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardWelcomeMeasurementsComponent]
    });
    fixture = TestBed.createComponent(CardWelcomeMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
