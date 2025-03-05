import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRoundedButtonComponent } from './check-rounded-button.component';

describe('CheckRoundedButtonComponent', () => {
  let component: CheckRoundedButtonComponent;
  let fixture: ComponentFixture<CheckRoundedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckRoundedButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckRoundedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
