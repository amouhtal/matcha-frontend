import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeGapSelectorComponent } from './age-gap-selector.component';

describe('AgeGapSelectorComponent', () => {
  let component: AgeGapSelectorComponent;
  let fixture: ComponentFixture<AgeGapSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgeGapSelectorComponent]
    });
    fixture = TestBed.createComponent(AgeGapSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
