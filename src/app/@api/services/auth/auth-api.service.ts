import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OtherUserDto } from 'src/app/@features/user-profile/DTO/other-user.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  baseURL = 'http://localhost:3000/user';

  constructor(private http: HttpClient) {

  }

 signupUser(data: any) {
  return this.http
  .post(`${this.baseURL}/signup`, data, {
    withCredentials: true,
  })
 }
}
