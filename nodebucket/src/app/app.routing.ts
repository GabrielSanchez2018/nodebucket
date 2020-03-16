import {Routes} from '@angular/router';
/*
*============================
*Author: Richard Krasso
*Edited by: Gabriel Sanchez
*Date: 3/10/2020
*=============================
*/

import {BaseLayoutComponent} from './shared/base-layout/base-layout.component';
import {HomeComponent} from './pages/home/home.component';
import {AuthLayoutComponent} from './shared/auth-layout/auth-layout.component'
import { SignInComponent } from './pages/sign-in/sign-in.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'signin', component: SignInComponent
      },


    ],

  },
  {
  path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },

];
