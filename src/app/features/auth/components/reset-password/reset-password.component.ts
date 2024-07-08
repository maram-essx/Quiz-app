import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  errMessage: string = '';
  hidePassword:boolean=true;

  constructor(private _AuthService: AuthService, private _Router: Router) {}

  resetPasswordForm: FormGroup = new FormGroup({
    otp: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/
      ),
    ]),
  });

  resetPassword(): void {
    const data = this.resetPasswordForm.value;

    if (this.resetPasswordForm.valid) {
      this._AuthService.resetPassword(data).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          this.errMessage = err.error.message;
          console.log(this.errMessage);
        },
        complete: () => {
          this._Router.navigate(['auth/login']);
        },
      });
    }
  }
}
