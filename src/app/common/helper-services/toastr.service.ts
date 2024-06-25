import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  
  constructor() { }

  Success(message:string){
    Swal.fire({
      text: message,
      icon: 'success',
      showConfirmButton: false,
      timer:1500
    })
   }
  
   Error(message:string){
    Swal.fire({
      text: message,
      icon: 'error',
      showConfirmButton: false,
      timer:1500
    })
   }
  
   ServerError(message:string){
    Swal.fire({
      text: message,
      icon: 'error',
      showConfirmButton: false,
      timer:5000
    })
   }
}
