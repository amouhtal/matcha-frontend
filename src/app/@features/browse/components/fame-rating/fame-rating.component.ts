import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'matcha-fame-rating',
  templateUrl: './fame-rating.component.html',
  styleUrls: ['./fame-rating.component.scss'],
})
export class FameRatingComponent implements AfterViewInit {
  private heartsMin!: any;
  private heartsMax!: any;
  lowRate: number = 0;
  highRate: number = 5;
  private rateValue: number = 0;
  displayFameRating: boolean = false;

  ratingGape: string = '>= <=';
  constructor(private starsElements: ElementRef) {}

  rate(index: number, min: boolean) {
    if (min) {
      this.heartsMin.forEach((heart: any) => {
        heart.classList.remove('heart--active');
      });

      for (let i = 0; i < index; i++) {
        this.heartsMin[i].classList.add('heart--active');
      }
      this.lowRate = index;
    } else {
      if (index < this.lowRate) index = this.lowRate;
      this.heartsMax.forEach((heart: any) => {
        heart.classList.remove('heart--active');
      });

      for (let i = 0; i < index; i++) {
        this.heartsMax[i].classList.add('heart--active');
      }
      this.highRate = index;
    }
    this.rateValue = index;
  }

  ngAfterViewInit() {
    this.heartsMin =
      this.starsElements.nativeElement.querySelectorAll('.heart-min');
    this.heartsMax =
      this.starsElements.nativeElement.querySelectorAll('.heart-max');
  }

  switchDisplayFameRating() {
    this.displayFameRating = !this.displayFameRating;
  }
}
