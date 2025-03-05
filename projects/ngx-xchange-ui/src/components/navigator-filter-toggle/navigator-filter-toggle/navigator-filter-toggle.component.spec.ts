import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorFilterToggleComponent } from './navigator-filter-toggle.component';

describe('NavigatorFilterToggleComponent', () => {
  let component: NavigatorFilterToggleComponent;
  let fixture: ComponentFixture<NavigatorFilterToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigatorFilterToggleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigatorFilterToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
