import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSortComponent } from './profile-sort.component';

describe('ProfileSortComponent', () => {
  let component: ProfileSortComponent;
  let fixture: ComponentFixture<ProfileSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileSortComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
