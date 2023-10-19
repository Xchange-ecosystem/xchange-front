import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedImageComponent } from './rounded-image.component';

describe('RoundedImageComponent', () => {
  let component: RoundedImageComponent;
  let fixture: ComponentFixture<RoundedImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoundedImageComponent]
    });
    fixture = TestBed.createComponent(RoundedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
