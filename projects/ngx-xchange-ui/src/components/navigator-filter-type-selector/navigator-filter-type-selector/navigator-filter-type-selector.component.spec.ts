import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorFilterTypeSelectorComponent } from './navigator-filter-type-selector.component';

describe('NavigatorFilterTypeSelectorComponent', () => {
  let component: NavigatorFilterTypeSelectorComponent;
  let fixture: ComponentFixture<NavigatorFilterTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigatorFilterTypeSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigatorFilterTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
