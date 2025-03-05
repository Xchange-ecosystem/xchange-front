import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorUsersFilterComponent } from './navigator-users-filter.component';

describe('NavigatorUsersFilterComponent', () => {
  let component: NavigatorUsersFilterComponent;
  let fixture: ComponentFixture<NavigatorUsersFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigatorUsersFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigatorUsersFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
