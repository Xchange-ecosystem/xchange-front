import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorObjectiveStatusFilterComponent } from './navigator-objective-status-filter.component';

describe('NavigatorObjectiveStatusFilterComponent', () => {
  let component: NavigatorObjectiveStatusFilterComponent;
  let fixture: ComponentFixture<NavigatorObjectiveStatusFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigatorObjectiveStatusFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigatorObjectiveStatusFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
