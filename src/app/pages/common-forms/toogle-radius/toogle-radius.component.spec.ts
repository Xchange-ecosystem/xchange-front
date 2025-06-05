import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleRadiusComponent } from './toogle-radius.component';

describe('ToogleRadiusComponent', () => {
  let component: ToogleRadiusComponent;
  let fixture: ComponentFixture<ToogleRadiusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToogleRadiusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToogleRadiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
