import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestsProfileComponent } from './interests-profile.component';

describe('InterestsProfileComponent', () => {
  let component: InterestsProfileComponent;
  let fixture: ComponentFixture<InterestsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestsProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterestsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
