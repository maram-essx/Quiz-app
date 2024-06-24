import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  selectedRole: string = '';
  roles: string[] = ['Instructor', 'Student'];
  hidePassword:boolean=true;
  registerForm!: FormGroup;

  constructor(private _AuthService: AuthService, private _Router: Router) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      role: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/)
      ])
    });
  }

  login() {
    this._Router.navigate(['/auth/login']);
  }

  onRoleChange(event: any) {
    this.selectedRole = event.target.value;
    console.log('Selected role:', this.selectedRole);
  }

  register(data: FormGroup): void {
    if (data.valid) {
      // this._AuthService.register(data.value).subscribe({
      //   next: (res) => {
      //     console.log(res);
      //   },
      //   error: (err) => {
      //     console.log(err.error.message);
      //   },
      //   complete: () => {
      //     this.login();
      //   }
      // });

      console.log(data.value);

    }
  }
}
