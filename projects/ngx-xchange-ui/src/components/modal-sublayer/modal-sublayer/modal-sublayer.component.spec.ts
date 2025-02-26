import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSubLayerComponent } from './modal-sublayer.component';

describe('ModalSubLayerComponent', () => {
  let component: ModalSubLayerComponent;
  let fixture: ComponentFixture<ModalSubLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSubLayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalSubLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
