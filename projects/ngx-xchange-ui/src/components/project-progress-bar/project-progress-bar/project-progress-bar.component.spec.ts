import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProgressBarComponent } from './project-progress-bar.component';

describe('ProjectProgressBarComponent', () => {
  let component: ProjectProgressBarComponent;
  let fixture: ComponentFixture<ProjectProgressBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectProgressBarComponent]
    });
    fixture = TestBed.createComponent(ProjectProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
