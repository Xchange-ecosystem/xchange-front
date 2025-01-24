import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button500Component } from './button-500.component';

describe('Button500Component', () => {
  let component: Button500Component;
  let fixture: ComponentFixture<Button500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button500Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Button500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
