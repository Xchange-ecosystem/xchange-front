import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedObjectiveComponent } from './feed-objective.component';

describe('FeedObjectiveComponent', () => {
  let component: FeedObjectiveComponent;
  let fixture: ComponentFixture<FeedObjectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedObjectiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
