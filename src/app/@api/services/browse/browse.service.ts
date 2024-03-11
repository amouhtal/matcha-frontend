import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userProfileDTO } from 'src/app/@features/browse/pages/browse/browse.component';

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

  getSuggestionList(): Observable<Array<userProfileDTO>> {
    return this.http.get<Array<userProfileDTO>>(
      'http://localhost:3000/browse/suggestions',
      {
        params: {
          userId: this.userID,
        },
        withCredentials: true,
      },
    );
  }
}
