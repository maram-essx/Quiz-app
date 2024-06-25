import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  email:string = ''

  constructor(private _AuthService:AuthService){}

  forgetPass(email:NgForm){
    this._AuthService.forgotPass(email.value.email).subscribe({
      next:res=>{
        console.log(res);
        
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }

}
