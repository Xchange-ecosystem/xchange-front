import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInsightsComponent } from './card-insights.component';

describe('CardInsightsComponent', () => {
  let component: CardInsightsComponent;
  let fixture: ComponentFixture<CardInsightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardInsightsComponent]
    });
    fixture = TestBed.createComponent(CardInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
