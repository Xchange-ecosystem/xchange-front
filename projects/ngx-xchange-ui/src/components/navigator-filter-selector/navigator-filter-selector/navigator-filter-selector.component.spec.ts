import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorFilterSelectorComponent } from './navigator-filter-selector.component';

describe('NavigatorFilterSelectorComponent', () => {
  let component: NavigatorFilterSelectorComponent;
  let fixture: ComponentFixture<NavigatorFilterSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigatorFilterSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigatorFilterSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
