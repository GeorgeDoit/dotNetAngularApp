import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// this allows us to inject things to our service.We dont see it in components cause
// they are by default Injectable.
@Injectable({
  // this tells our service which module providing this service
  providedIn: 'root'
})

export class AuthService {

  baseUrl = 'http://localhost:5000/api/auth/';

  constructor(private http: HttpClient) { }

  login(model) {
    // this request returns a token. In order to do somehting with an observable when it comes back
    // from a server we need to use RXJS operators, and to use the operators we need to pass them
    // through a pipe method.
    return this.http.post(this.baseUrl + 'login', model)
      .pipe(
        map((response: any) => {

          const user = response;

          if (user) {
            localStorage.setItem('token', user.token);
          }

        })
      );
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }
}
