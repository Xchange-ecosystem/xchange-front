import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button400Component } from './button-400.component';

describe('Button400Component', () => {
  let component: Button400Component;
  let fixture: ComponentFixture<Button400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button400Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Button400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
