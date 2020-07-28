import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm', { static: false }) registerForm: NgForm;
  @Output() cancelRegister = new EventEmitter<boolean>();

  model: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  register() {
    this.authService.register(this.registerForm.value).subscribe(
      () => {
        console.log('registered successfully');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
