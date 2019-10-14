import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  /* login(username: string, password: string) {
    return this.http.post<any>(`http://simarobot.com/wp-json/jwt-auth/v1/token`, { username, password })
      .pipe(map(token => {
        // login successful if there's a jwt token in the response
        if (token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('token', JSON.stringify(token));
        }
        return;
      }));
  } */

  login(username: string, password: string) {
    return this.http.get<any>(`http://simarobot.com/sima-profesor/web/LoginInApp?email=${username}&pass=${password}&app=4Sd568wqf4j855J4235GLd56b99`)
      .pipe(map(token => {
        // login successful if there's a jwt token in the response
        if (token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('token', JSON.stringify(token));
        }
        return;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
