import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumUpgradeComponent } from './premium-upgrade.component';

describe('PremiumUpgradeComponent', () => {
  let component: PremiumUpgradeComponent;
  let fixture: ComponentFixture<PremiumUpgradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiumUpgradeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiumUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
