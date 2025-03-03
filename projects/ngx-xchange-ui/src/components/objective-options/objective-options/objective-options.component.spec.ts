import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveOptionsComponent } from './objective-options.component';

describe('ObjectiveOptionsComponent', () => {
  let component: ObjectiveOptionsComponent;
  let fixture: ComponentFixture<ObjectiveOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectiveOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjectiveOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
