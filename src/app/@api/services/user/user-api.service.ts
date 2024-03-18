import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  OtherUserResultDTO } from 'src/app/@features/user-profile/DTO/other-user.dto';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  baseURL = 'http://localhost:3000/user';
  constructor(private http: HttpClient) {

  }

  getUser(username: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('username', username || '');
    return  this.http
      .get<OtherUserResultDTO>(this.baseURL, {
        params: queryParams,
        withCredentials: true,
      })
  }

  rateUser(data: any) {
    return this.http
    .post(`${this.baseURL}/rate`, data, {
      withCredentials: true,
    })
   }
}
