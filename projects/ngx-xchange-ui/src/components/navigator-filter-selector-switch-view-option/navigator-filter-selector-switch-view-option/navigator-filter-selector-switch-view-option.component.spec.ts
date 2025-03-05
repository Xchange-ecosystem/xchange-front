import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorFilterSelectorSwitchViewOptionComponent } from './navigator-filter-selector-switch-view-option.component';

describe('NavigatorFilterSelectorSwitchViewOptionComponent', () => {
  let component: NavigatorFilterSelectorSwitchViewOptionComponent;
  let fixture: ComponentFixture<NavigatorFilterSelectorSwitchViewOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigatorFilterSelectorSwitchViewOptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigatorFilterSelectorSwitchViewOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
