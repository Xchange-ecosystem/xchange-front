import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestSelectComponent } from './interest-select.component';

describe('InterestSelectComponent', () => {
  let component: InterestSelectComponent;
  let fixture: ComponentFixture<InterestSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterestSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
