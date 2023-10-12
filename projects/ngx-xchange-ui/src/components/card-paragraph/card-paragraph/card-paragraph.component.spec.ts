import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardParagraphComponent } from './card-paragraph.component';

describe('CardParagraphComponent', () => {
  let component: CardParagraphComponent;
  let fixture: ComponentFixture<CardParagraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardParagraphComponent]
    });
    fixture = TestBed.createComponent(CardParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
