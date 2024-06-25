import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Auth} from '../../model/Auth';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  isActiveSignUp:boolean=false;
  hidePassword:boolean=true;
  loginForm:FormGroup=new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
      ),
    ]),
  })

  constructor(private _AuthService:AuthService,
    private _snackBar: MatSnackBar,
    private _Router:Router
  ){

  }

  register(){
   this.isActiveSignUp=!this.isActiveSignUp
   this._Router.navigate(['/auth/register']);
  }
  onLogin(data:FormGroup){
   
    this._AuthService.login(data.value).subscribe({
      next:(res:Auth.ILoginRes)=>{
       console.log("res",res);
       this.openSnackBar('Login successful!', 'Success');
      },
      error:(error:HttpErrorResponse)=>{
        const errMes=error.error.message;
        console.log("error",error);
        this.openSnackBar(errMes, 'Close');
      },
      complete:()=>{
       
      }
    })
   }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
