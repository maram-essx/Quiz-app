import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { Role } from '../../Enums/Role.enum';

export const studentGuard: CanActivateFn = (route, state) => {
  const _Rouer = inject(Router);
  const _AuthService = inject(AuthService);

  if (
    localStorage.getItem('userToken') != null &&
    _AuthService.role == Role.Student
  ) {
    return true;
  } else {
    _Rouer.navigateByUrl('/auth');
    return false;
}
};
