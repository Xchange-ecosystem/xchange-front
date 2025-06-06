import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspendMemberComponent } from './suspend-member.component';

describe('SuspendMemberComponent', () => {
  let component: SuspendMemberComponent;
  let fixture: ComponentFixture<SuspendMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuspendMemberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuspendMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
