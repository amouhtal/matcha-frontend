import { Component } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'matcha-age-gap-selector',
  templateUrl: './age-gap-selector.component.html',
  styleUrls: ['./age-gap-selector.component.scss'],
})
export class AgeGapSelectorComponent {
  private minAge: number = 18;
  maxAge: number = 100;
  ageGape: string = '18 - 100';
  displayAgeGap: boolean = false;

  private clickInterval: any;

  startDecrementing(symbol: string) {
    this.clickInterval = setInterval(() => {
      this.minAgeChange(symbol);
    }, 50); // Adjust the interval as needed
  }

  switchDisplayAgeGap() {
    this.displayAgeGap = !this.displayAgeGap;
  }
  startIncrementingMax(symbol: string) {
    this.clickInterval = setInterval(() => {
      this.maxAgeChange(symbol);
    }, 50); // Adjust the interval as needed
  }

  stopIncrementing() {
    clearInterval(this.clickInterval);
  }

  maxAgeChange(symbol: string) {
    // other function name than ageFilter because it's not a filter example: ageChange,
    if (symbol === '-') {
      if (this.maxAge > 18) {
        this.maxAge--;
        this.ageGape = this.minAge.toString() + '-' + this.maxAge.toString();
      }
    } else {
      if (this.maxAge < 100) {
        this.maxAge++;
        this.ageGape = this.minAge.toString() + '-' + this.maxAge.toString();
      }
    }
  }
  minAgeChange(symbol: string) {
    // other function name than ageFilter because it's not a filter example: ageChange,
    if (symbol === '-') {
      if (this.minAge > 18) {
        this.minAge--;
        this.ageGape = this.minAge.toString() + '-' + this.maxAge.toString();
      }
    } else {
      if (this.minAge < 100) {
        this.minAge++;
        this.ageGape = this.minAge.toString() + '-' + this.maxAge.toString();
      }
    }
  }
}
