import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTabComponent } from './section-tab.component';

describe('SectionTabComponent', () => {
  let component: SectionTabComponent;
  let fixture: ComponentFixture<SectionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
