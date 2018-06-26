import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  getUserLogin(username : string, password: string) : Observable<User> {
    return this.http.post<User>("/api/auth.php", {username, password});
  }
}
