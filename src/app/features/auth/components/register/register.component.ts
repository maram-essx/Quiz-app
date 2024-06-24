import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  selectedRole: string = '';
  roles: string[] = ['Instructor', 'Student'];


  constructor(private _AuthService:AuthService, private _Router:Router) {}

  login() {
    this._Router.navigate(['/auth/login'])
  }

  onRoleChange(event: any) {
    this.selectedRole = event.target.value;
    console.log('Selected role:', this.selectedRole);
  }
}
