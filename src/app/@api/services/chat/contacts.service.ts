import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  getContacts(userID: number){
    return this.http.get('http://localhost:3000/conversations', {
      params: {
        userID
      }
    } );
  }
}
