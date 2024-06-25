import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Auth} from '../../model/Auth';

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
  response: Auth.IRegisterRes = {
    message: '',
    data: {
      first_name: '',
      last_name: '',
      email: '',
      status: '',
      role: '',
      _id: '',
      updatedAt: '',
      createdAt: '',
      __v: 0
    }
  }

  constructor(private _AuthService: AuthService, private _Router: Router) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
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
    // console.log('Selected role:', this.selectedRole);
  }

  register(registerForm: FormGroup): void {
    if (registerForm.valid) {
      console.log('Registering with data:', registerForm.value);
      this._AuthService.register(registerForm.value).subscribe({
        next: (res: Auth.IRegisterRes) => {
          console.log(res);
          this.response = res;
        },
        error: (err) => {
          console.error('Registration error:', err);
        },
        complete: () => {
          this.login();
        }
      });
    }
  }

}
