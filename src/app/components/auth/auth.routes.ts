import { Routes } from "@angular/router";

export const AUTH_ROUTES: Routes = [
    {
      path: '',
      children: [
        {
          path: 'login',
          loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
        },
        {
          path: 'signup',
          loadComponent: () => import('./sign-in/sign-in.component').then(m => m.SignInComponent)
        },
        {
          path: 'forgot',
          loadComponent: () => import('./recover-password/recover-password.component').then(m => m.RecoverPasswordComponent)
        },
        {
          path: 'reset',
          loadComponent: () => import('./change-password/change-password.component').then(m => m.ChangePasswordComponent)
        },
        { path: '**', redirectTo: 'login' }
      ]
    }
  ];