import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendCreditsComponent } from './send-credits.component';

describe('SendCreditsComponent', () => {
  let component: SendCreditsComponent;
  let fixture: ComponentFixture<SendCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendCreditsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
