import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @ViewChild('loginForm', { static: false }) loginForm: NgForm;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onLogin() {
    this.authService.login(this.loginForm.value).subscribe(
      (next) => {
        console.log('login successfully');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('User logged Out');
  }
}
