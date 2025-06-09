import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppereanceComponent } from './appereance.component';

describe('AppereanceComponent', () => {
  let component: AppereanceComponent;
  let fixture: ComponentFixture<AppereanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppereanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppereanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
