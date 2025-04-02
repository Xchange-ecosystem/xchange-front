import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewButton500Component } from './new-button-500.component';

describe('NewButton500Component', () => {
  let component: NewButton500Component;
  let fixture: ComponentFixture<NewButton500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewButton500Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewButton500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
