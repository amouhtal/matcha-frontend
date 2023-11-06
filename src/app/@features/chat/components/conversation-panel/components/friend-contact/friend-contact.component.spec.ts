import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendContactComponent } from './friend-contact.component';

describe('FriendContactComponent', () => {
  let component: FriendContactComponent;
  let fixture: ComponentFixture<FriendContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriendContactComponent]
    });
    fixture = TestBed.createComponent(FriendContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
