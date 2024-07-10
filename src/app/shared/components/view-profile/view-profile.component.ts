import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { IUserResponse, IUser } from '../../models/iUser';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';
import { ToastrService } from 'src/app/common/helper-services/toastr.service';

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
    private _Router: Router,
    private _ProfileService: ProfileService,
    private _ToastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.userId = this._ActivatedRoute.snapshot.params['id'];
    this.viewUser = this._ActivatedRoute.snapshot.params['viewUser'];
    if (this.viewUser) {
      // from users page
      this.isViewUser = true;
    }

    this.updateProfileForm = new FormGroup({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      email: new FormControl(''),
      status: new FormControl(''),
    });

    this.getCurrentUser();
    this.getRole();
  }

  getCurrentUser(): void {
    const role = localStorage.getItem('role');
    const first_name = localStorage.getItem('first_name');
    const last_name = localStorage.getItem('last_name');
    const email = localStorage.getItem('email');
    const status = localStorage.getItem('status');

    if (role !== null && first_name !== null && last_name !== null && email !== null && status !== null) {
      this.role = role;
      this.first_name = first_name;
      this.last_name = last_name;
      this.email = email;
      this.status = status;

      this.updateProfileForm.patchValue({
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        status: this.status
      });
    }
  }

  getRole() {
    const role = localStorage.getItem('role');
    if (role == 'Student') {
      this.isInstructor = false;
    }
  }

  updateProfile(): void {
    const updatedData = this.updateProfileForm.value;

    const updateLocalStorage = (data: any) => {
      localStorage.setItem('first_name', data.first_name);
      localStorage.setItem('last_name', data.last_name);
      localStorage.setItem('email', data.email);
      localStorage.setItem('status', data.status);
    };

    if (this.isInstructor) {
      this._ProfileService.updateInstructorProfile(updatedData).subscribe({
        next: (res) => {
          console.log('Instructor profile updated successfully', res);
          this._Router.navigate(['/dashboard/instructor/profile']);
        },
        error: (err) => {
          console.error('Error updating instructor profile', err.message);
          this._ToastrService.ServerError(err.message);
        },
        complete: () => {
          updateLocalStorage(updatedData);
          this._ToastrService.Success('Profile updated successfully!');
          this.refreshPage();
        }
      });
    } else {
      this._ProfileService.updateStudentProfile(updatedData).subscribe({
        next: (res) => {
          console.log('Student profile updated successfully', res);
          this._Router.navigate(['/dashboard/student/profile']);
        },
        error: (err) => {
          console.error('Error updating student profile', err.message);
          console.error('Error details:', err);
          this._ToastrService.ServerError(err.message);
        },
        complete: () => {
          updateLocalStorage(updatedData);
          this._ToastrService.Success('Profile updated successfully!');
          this.refreshPage();
        }
      });
    }
  }

  refreshPage(): void {
    window.location.reload();
  }
}
