import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatOptionsButtonComponent } from './chat-options-button.component';

describe('ChatOptionsButtonComponent', () => {
  let component: ChatOptionsButtonComponent;
  let fixture: ComponentFixture<ChatOptionsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatOptionsButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatOptionsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
