import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../_service/auth.service';
import { AlertifyService } from '../_service/alerifyjs.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @ViewChild('loginForm', { static: false }) loginForm: NgForm;
  photoUrl: string;

  constructor(
    public authService: AuthService,
    private alerify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.currentPhotoUrl.subscribe(
      (photoUrl) => (this.photoUrl = photoUrl)
    );
  }

  onLogin() {
    this.authService.login(this.loginForm.value).subscribe(
      (next) => {
        this.alerify.success('login successfully');
      },
      (err) => {
        this.alerify.error(err);
      },
      () => {
        this.router.navigate(['/members']);
      }
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alerify.message('logged out');
    this.router.navigate(['/home']);
  }
}
