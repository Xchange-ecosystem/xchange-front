import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsDropdownComponent } from './goals-dropdown.component';

describe('GoalsDropdownComponent', () => {
  let component: GoalsDropdownComponent;
  let fixture: ComponentFixture<GoalsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalsDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoalsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
