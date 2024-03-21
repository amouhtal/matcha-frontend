import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OtherUserDto } from 'src/app/@features/user-profile/DTO/other-user.dto';

@Injectable({
  providedIn: 'root',
})
export class MatchsApiService {
  baseURL = 'http://localhost:3000/match';

  constructor(private http: HttpClient) {}

  sendMatchRequest(data: any) {
    console.log('send match request called ');
    return this.http.post(`${this.baseURL}/sendRequest`, data, {
      withCredentials: true,
    });
  }

  getMatchStatus(data: any) {
    console.log('get match status called ');
    return this.http.post(`${this.baseURL}/getMatchStatus`, data, {
      withCredentials: true,
    });
  }
  cancelMatchRequest(data: any) {
    console.log('cancel match Request called ');
    return this.http.post(`${this.baseURL}/cancelMatch`, data, {
      withCredentials: true,
    });
  }
}
