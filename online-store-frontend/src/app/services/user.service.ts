import { Injectable } from '@angular/core';
import {User} from "../models/users";
import { apiUrl } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

 

signUp(user: User): Observable<User> {
    const url = `${apiUrl}/register`;
    return this.http.post<User>(url, user);
}

update(user: User): Observable<User> {
    const url = `${apiUrl}/profile`;
    return this.http.put<User>(url, user);    }

get(email: string): Observable<User> {
    const url = `${apiUrl}/profile/${email}`;
    return this.http.get<User>(url);
}

}
