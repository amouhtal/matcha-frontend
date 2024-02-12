import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'matcha-root',
  templateUrl: './matcha.component.html',
  styleUrls: ['./matcha.component.scss']
})
export class MatchaComponent {
  constructor(private http :HttpClient) {}
  title = 'matcha-frontend';

  test(){
    this.http.get('http://localhost:3000/',{withCredentials : true}).subscribe({
      next: (ret: any) => {
        console.log(ret);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
