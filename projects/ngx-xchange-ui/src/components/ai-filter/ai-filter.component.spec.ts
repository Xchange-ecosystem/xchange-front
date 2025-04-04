import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiFilterComponent } from './ai-filter.component';

describe('AiFilterComponent', () => {
  let component: AiFilterComponent;
  let fixture: ComponentFixture<AiFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
