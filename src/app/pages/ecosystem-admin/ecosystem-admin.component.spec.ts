import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcosystemAdminComponent } from './ecosystem-admin.component';

describe('EcosystemAdminComponent', () => {
  let component: EcosystemAdminComponent;
  let fixture: ComponentFixture<EcosystemAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcosystemAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcosystemAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
