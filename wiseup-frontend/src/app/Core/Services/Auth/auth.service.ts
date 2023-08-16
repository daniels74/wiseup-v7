import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ServerAuthResponse } from '../../Interfaces/server-auth-response';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authBehaviorSubject = new BehaviorSubject<boolean>(false);
  auth = this.authBehaviorSubject.asObservable();

  userBehaviorSubject = new BehaviorSubject<object>({});
  user = this.userBehaviorSubject.asObservable();

  constructor(private http: HttpClient) {}

  register(credentials: object): Observable<ServerAuthResponse> {
    return this.http.post<ServerAuthResponse>(
      'http://localhost:3000/auth/registration',
      credentials,
    );
  }

  tokenPermssions(token: string) {
    // // Store jwt in local storage
    localStorage.setItem('token', token);

    // Set token timer
    const timer = 60000 * 60;
    setTimeout(() => {
      localStorage.removeItem('token');
    }, timer);

    const user: any = jwtDecode(token);

    // // set User Data
    this.userBehaviorSubject.next(user);

    // // set auth state
    this.authBehaviorSubject.next(true);
  }
}
