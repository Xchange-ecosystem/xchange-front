import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsSelectionComponent } from './metrics-selection.component';

describe('MetricsSelectionComponent', () => {
  let component: MetricsSelectionComponent;
  let fixture: ComponentFixture<MetricsSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricsSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetricsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
