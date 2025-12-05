import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModuleComponent } from './auth-module.component';
import { RouterModule } from '@angular/router';
import { AUTH_ROUTES } from './auth.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AUTH_ROUTES)
  ],
  declarations: [AuthModuleComponent]
})
export class AuthModule { }
