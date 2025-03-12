import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAsideNavComponent } from './new-aside-nav.component';

describe('NewAsideNavComponent', () => {
  let component: NewAsideNavComponent;
  let fixture: ComponentFixture<NewAsideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAsideNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewAsideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
