import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Auth} from '../../model/Auth';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/common/helper-services/toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userData!:Auth.ILoginRes;
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
    private _Router:Router,
    private _ToastrService:ToastrService
  ){

  }

  register(){
   this.isActiveSignUp=!this.isActiveSignUp
   this._Router.navigate(['/auth/register']);
  }
  onLogin(data:FormGroup){
   
    this._AuthService.login(data.value).subscribe({
      next:(res:Auth.ILoginRes)=>{
      this.userData=res
       console.log("res",res);
      //  this._ToastrService.Success('Login successful!');
      },
      error:(error:HttpErrorResponse)=>{
        const errMes=error.error.message;
        console.log("error",error);
        this._ToastrService.ServerError(errMes);
      },
      complete:()=>{

        localStorage.setItem('userToken' , this.userData.data.accessToken)
        localStorage.setItem('role' , this.userData.data.profile.role)
this._Router.navigate(['/dashboard/instructor'])

        this._Router.navigate(['/dashboard']);

      }
    })
   }



  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
