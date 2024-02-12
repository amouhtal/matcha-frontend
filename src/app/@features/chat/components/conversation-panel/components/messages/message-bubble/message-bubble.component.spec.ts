import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBubbleComponent } from './message-bubble.component';

describe('MessageBubbleComponent', () => {
  let component: MessageBubbleComponent;
  let fixture: ComponentFixture<MessageBubbleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageBubbleComponent]
    });
    fixture = TestBed.createComponent(MessageBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
