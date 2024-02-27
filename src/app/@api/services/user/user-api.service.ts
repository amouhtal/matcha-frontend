import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OtherUserDto } from 'src/app/@features/user-profile/DTO/other-user.dto';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private http: HttpClient) {

  }

  getUser(username: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('username', username || '');
    return  this.http
      .get<OtherUserDto>(`http://localhost:3000/user`, {
        params: queryParams,
        withCredentials: true,
      })
  }
}
