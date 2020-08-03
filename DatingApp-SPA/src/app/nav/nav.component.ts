import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../_service/auth.service';
import { AlertifyService } from '../_service/alerifyjs.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @ViewChild('loginForm', { static: false }) loginForm: NgForm;

  constructor(
    public authService: AuthService,
    private alerify: AlertifyService
  ) {}

  ngOnInit(): void {}

  onLogin() {
    this.authService.login(this.loginForm.value).subscribe(
      (next) => {
        this.alerify.success('login successfully');
      },
      (err) => {
        this.alerify.error(err);
      }
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alerify.message('logged out');
  }
}
