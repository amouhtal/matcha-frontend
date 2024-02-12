import { Component } from '@angular/core';

@Component({
  selector: 'matcha-complete-signup-page',
  templateUrl: './complete-signup-page.component.html',
  styleUrls: ['./complete-signup-page.component.scss'],
})
export class CompleteSignupPageComponent {
  progress = 2;
  progressHight = this.progress * 50 + 10 + '%';

  Next(event: number) {
    this.progress = event;
    this.progressHight = this.progress * 50 + 10 + '%';
  }
}
