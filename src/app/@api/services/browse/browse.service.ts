import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrowseService {
  userID!: number;

  constructor(private http: HttpClient) {
    this.userID = localStorage.getItem('session')
      ? JSON.parse(localStorage.getItem('session') as string).user_id
      : 0;
  }

  getSuggestionList() {
    return this.http.get('http://localhost:3000/browse/suggestions', {
      params: {
        userId: this.userID,
      },
    });
  }
}
