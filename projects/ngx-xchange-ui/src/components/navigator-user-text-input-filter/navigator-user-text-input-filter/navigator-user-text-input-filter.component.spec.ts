import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorUserTextInputFilterComponent } from './navigator-user-text-input-filter.component';

describe('NavigatorUserTextInputFilterComponent', () => {
  let component: NavigatorUserTextInputFilterComponent;
  let fixture: ComponentFixture<NavigatorUserTextInputFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigatorUserTextInputFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigatorUserTextInputFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
