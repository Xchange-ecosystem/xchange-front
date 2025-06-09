import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumSettingsComponent } from './premium-settings.component';

describe('PremiumSettingsComponent', () => {
  let component: PremiumSettingsComponent;
  let fixture: ComponentFixture<PremiumSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiumSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiumSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
