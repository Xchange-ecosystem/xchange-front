import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxXchangeUiComponent } from './ngx-xchange-ui.component';

describe('NgxXchangeUiComponent', () => {
  let component: NgxXchangeUiComponent;
  let fixture: ComponentFixture<NgxXchangeUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxXchangeUiComponent]
    });
    fixture = TestBed.createComponent(NgxXchangeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
