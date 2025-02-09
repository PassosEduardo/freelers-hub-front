import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RequestService } from './request-service';
import { lastValueFrom } from 'rxjs';


export const authenticationGuard: CanActivateFn = async (next, state) => {
  const requestService = inject(RequestService);
  const router = inject(Router);

  var token = localStorage.getItem('freelers_token');

  if(!token) {
    return false;
  }
  let authenticated = false;

  try {
    return await lastValueFrom(requestService.AuthenticateToken(token!))
  }
  catch {
    router.navigateByUrl('log-in');
    return false;
  }
};
