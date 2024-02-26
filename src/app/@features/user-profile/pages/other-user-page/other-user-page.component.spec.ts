import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherUserPageComponent } from './other-user-page.component';

describe('OtherUserPageComponent', () => {
  let component: OtherUserPageComponent;
  let fixture: ComponentFixture<OtherUserPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherUserPageComponent]
    });
    fixture = TestBed.createComponent(OtherUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
