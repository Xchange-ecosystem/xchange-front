import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestScaleComponent } from './interest-scale.component';

describe('InterestScaleComponent', () => {
  let component: InterestScaleComponent;
  let fixture: ComponentFixture<InterestScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestScaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterestScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
