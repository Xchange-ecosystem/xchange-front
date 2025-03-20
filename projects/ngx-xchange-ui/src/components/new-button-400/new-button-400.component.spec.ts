import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewButton400Component } from './new-button-400.component';

describe('NewButton400Component', () => {
  let component: NewButton400Component;
  let fixture: ComponentFixture<NewButton400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewButton400Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewButton400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
