import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProofsIndicatorComponent } from './card-proofs-indicator.component';

describe('CardProofsIndicatorComponent', () => {
  let component: CardProofsIndicatorComponent;
  let fixture: ComponentFixture<CardProofsIndicatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardProofsIndicatorComponent]
    });
    fixture = TestBed.createComponent(CardProofsIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
