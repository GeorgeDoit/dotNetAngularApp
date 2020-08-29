import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  // to store Username and Password
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {

    this.authService.login(this.model).subscribe(next => {

      console.log('logged in successfully');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    // returns true or false value. If it has something return true else return false
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }
}
