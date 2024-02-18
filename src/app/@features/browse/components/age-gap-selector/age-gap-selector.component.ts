import { Component } from '@angular/core';

@Component({
  selector: 'matcha-age-gap-selector',
  templateUrl: './age-gap-selector.component.html',
  styleUrls: ['./age-gap-selector.component.scss'],
})
export class AgeGapSelectorComponent {
  minAge: number = 18;
  maxAge: number = 100;
  ageGape: string = '18 - 100';

  private clickInterval: any;

  startDecrementing(symbol: string) {
    this.clickInterval = setInterval(() => {
      this.minAgeChange(symbol);
    }, 50); // Adjust the interval as needed
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
        console.log('change age', this.maxAge);
        this.ageGape = this.minAge.toString() + '-' + this.maxAge.toString();
        console.log(this.ageGape);
      }
    } else {
      if (this.maxAge < 100) {
        this.maxAge++;
        this.ageGape = this.minAge.toString() + '-' + this.maxAge.toString();
        console.log(this.ageGape);
      }
    }
  }
  minAgeChange(symbol: string) {
    // other function name than ageFilter because it's not a filter example: ageChange,
    if (symbol === '-') {
      if (this.minAge > 18) {
        this.minAge--;
        console.log('change age', this.minAge);
        this.ageGape = this.minAge.toString() + '-' + this.maxAge.toString();
        console.log(this.ageGape);
      }
    } else {
      if (this.minAge < 100) {
        this.minAge++;
        this.ageGape = this.minAge.toString() + '-' + this.maxAge.toString();
        console.log(this.ageGape);
      }
    }
  }
}
