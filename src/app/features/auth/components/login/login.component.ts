import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {Auth} from '../../model/Auth';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isActiveSignUp:boolean=false;
  loginForm:FormGroup=new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
      ),
    ]),
  })

  constructor(private _AuthService:AuthService){

  }
  toggleSignButton(){
   this.isActiveSignUp=!this.isActiveSignUp
  }
  onLogin(data:FormGroup){
    this._AuthService.login(data.value).subscribe({
      next:(res:Auth.ILoginRes)=>{
       console.log("res",res);
       
      },
      error:(error:HttpErrorResponse)=>{
        const errMes=error.error.message;
        console.log("error",error);
  
      },
   
    })
   }
}
