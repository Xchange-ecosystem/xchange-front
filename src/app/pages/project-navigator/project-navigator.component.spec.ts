import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectNavigatorComponent } from './project-navigator.component';

describe('ProjectNavigatorComponent', () => {
  let component: ProjectNavigatorComponent;
  let fixture: ComponentFixture<ProjectNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectNavigatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
