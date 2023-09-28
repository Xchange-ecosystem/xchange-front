import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsInsightsComponent } from './cards-insights.component';

describe('CardsInsightsComponent', () => {
  let component: CardsInsightsComponent;
  let fixture: ComponentFixture<CardsInsightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsInsightsComponent]
    });
    fixture = TestBed.createComponent(CardsInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
