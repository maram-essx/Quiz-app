import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'src/app/common/helper-services/toastr.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  hidePassword:boolean=true;
  hidePassword1:boolean=true;
  hidePassword2:boolean=true;
  constructor(private _AuthService:AuthService,private _ToastrService:ToastrService,private _FormBuilder:FormBuilder,private _Router:Router){}
  
  changeForm:FormGroup = this._FormBuilder.group({
    password:['',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/)]],
    password_new:['',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/)]]
  })
  changePass():void{
    console.log(this.changeForm.value);
    
    this._AuthService.changePassword(this.changeForm.value).subscribe({
      next:res=>{
        console.log(res);
        this._ToastrService.Success('Password updated successfully')
        this._Router.navigate(['/dashboard'])
        
      },error:err=>{
        console.log(err);
        this._ToastrService.Error(err.error.message)
      }
    })
  }
}
