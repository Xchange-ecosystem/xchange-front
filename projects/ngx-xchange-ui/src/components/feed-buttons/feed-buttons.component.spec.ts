import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedButtonsComponent } from './feed-buttons.component';

describe('FeedButtonsComponent', () => {
  let component: FeedButtonsComponent;
  let fixture: ComponentFixture<FeedButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
