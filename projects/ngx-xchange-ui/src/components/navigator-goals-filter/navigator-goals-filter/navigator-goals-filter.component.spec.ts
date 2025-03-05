import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorGoalsFilterComponent } from './navigator-goals-filter.component';

describe('NavigatorGoalsFilterComponent', () => {
  let component: NavigatorGoalsFilterComponent;
  let fixture: ComponentFixture<NavigatorGoalsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigatorGoalsFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigatorGoalsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
