import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FameRatingComponent } from './fame-rating.component';

describe('FameRatingComponent', () => {
  let component: FameRatingComponent;
  let fixture: ComponentFixture<FameRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FameRatingComponent]
    });
    fixture = TestBed.createComponent(FameRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
