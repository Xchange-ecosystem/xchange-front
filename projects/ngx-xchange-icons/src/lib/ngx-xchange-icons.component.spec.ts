import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxXchangeIconsComponent } from './ngx-xchange-icons.component';

describe('NgxXchangeIconsComponent', () => {
  let component: NgxXchangeIconsComponent;
  let fixture: ComponentFixture<NgxXchangeIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxXchangeIconsComponent]
    });
    fixture = TestBed.createComponent(NgxXchangeIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
