import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorObjectiveCardComponent } from './navigator-objective-card.component';

describe('NavigatorObjectiveCardComponent', () => {
  let component: NavigatorObjectiveCardComponent;
  let fixture: ComponentFixture<NavigatorObjectiveCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigatorObjectiveCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigatorObjectiveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
