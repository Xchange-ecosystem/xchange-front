import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorRangeFilterComponent } from './navigator-range-filter.component';

describe('NavigatorRangeFilterComponent', () => {
  let component: NavigatorRangeFilterComponent;
  let fixture: ComponentFixture<NavigatorRangeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigatorRangeFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigatorRangeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
