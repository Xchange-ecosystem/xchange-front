import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveFiltersComponent } from './objective-filters.component';

describe('ObjectiveFiltersComponent', () => {
  let component: ObjectiveFiltersComponent;
  let fixture: ComponentFixture<ObjectiveFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectiveFiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjectiveFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
