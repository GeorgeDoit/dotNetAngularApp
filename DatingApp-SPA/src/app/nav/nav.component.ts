import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  // to store Username and Password
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {

    this.authService.login(this.model).subscribe(next => {

      this.alertify.success('logged in successfully');
    }, error => {
      this.alertify.error(error);
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    // returns true or false value. If it has something return true else return false
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }
}
