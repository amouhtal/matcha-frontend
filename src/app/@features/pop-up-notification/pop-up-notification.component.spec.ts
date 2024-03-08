import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpNotificationComponent } from './pop-up-notification.component';

describe('PopUpNotificationComponent', () => {
  let component: PopUpNotificationComponent;
  let fixture: ComponentFixture<PopUpNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpNotificationComponent]
    });
    fixture = TestBed.createComponent(PopUpNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
