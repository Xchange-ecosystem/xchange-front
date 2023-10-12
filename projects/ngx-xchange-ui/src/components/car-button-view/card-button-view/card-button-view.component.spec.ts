import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardButtonViewComponent } from './card-button-view.component';

describe('CardButtonViewComponent', () => {
  let component: CardButtonViewComponent;
  let fixture: ComponentFixture<CardButtonViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardButtonViewComponent]
    });
    fixture = TestBed.createComponent(CardButtonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
