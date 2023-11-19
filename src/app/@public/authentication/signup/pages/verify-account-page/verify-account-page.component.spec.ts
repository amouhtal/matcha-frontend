import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyAccountPageComponent } from './verify-account-page.component';

describe('VerifyAccountPageComponent', () => {
  let component: VerifyAccountPageComponent;
  let fixture: ComponentFixture<VerifyAccountPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyAccountPageComponent]
    });
    fixture = TestBed.createComponent(VerifyAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
