import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { IUserResponse, IUser } from '../../models/iUser';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  updateProfileForm!: FormGroup;

  isInstructor: boolean = true;

  userId: string = '';
  viewUser: string = '';
  isViewUser: boolean = false;

  role: string = '';
  first_name: string = '';
  last_name: string = '';
  email: string = '';
  status: string = '';

  userDataRes: IUserResponse = {
    success: false,
    message: '',
    data: {
      user: {
        _id: '',
        userName: '',
        email: '',
        phoneNumber: 0,
        country: '',
        role: '',
        profileImage: '',
        verified: false,
        createdAt: '',
        updatedAt: '',
      }
    }
  };

  constructor(
    private _AuthService: AuthService,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router
  ) {
    this.getCurrentUser();
  }

  ngOnInit(): void {
    this.userId = this._ActivatedRoute.snapshot.params['id'];
    this.viewUser = this._ActivatedRoute.snapshot.params['viewUser'];
    if (this.viewUser) {
      // from users page
      this.isViewUser = true;
    }

    this.updateProfileForm = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      });
  }

  getCurrentUser(): void {
    const role = localStorage.getItem('role');
    const first_name = localStorage.getItem('first_name');
    const last_name = localStorage.getItem('last_name');
    const email = localStorage.getItem('email');
    const status = localStorage.getItem('status');

    if ( role !== null && first_name !== null && last_name !== null && email !== null && status !== null) {
      this.role = role;
      this.first_name = first_name;
      this.last_name = last_name;
      this.email = email;
      this.status = status;

      console.log('IF CONDITION FIRES');
      console.log('PROFILE DATA: ', this.role, this.first_name, this.last_name, this.email, this.status);

    } else {
    }
  }

  goToHomeOrUsers(): void {
    if (this.viewUser) {
      // from users page
      this._Router.navigate(['/instructor/users']);
    } else {
      this.navigateToAdminOrUser();
    }
  }

  navigateToAdminOrUser(): void {
    const role = localStorage.getItem('role');
    if (role === 'Instructor') {
      this._Router.navigate(['/instructor/home']);
    } else {
      this._Router.navigate(['/student/home']);
    }
  }


  getRole() {
    const role = localStorage.getItem('role');
    if(role == 'Student'){
      this.isInstructor = false;
    }
  }

  refreshPage(): void {
    window.location.reload();
  }
}
