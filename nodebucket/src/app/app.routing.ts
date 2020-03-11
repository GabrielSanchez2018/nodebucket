import {Routes} from '@angular/router';
import {BaseLayoutComponent} from './shared/base-layout/base-layout.component';
import {HomeComponent} from './pages/home/home.component';
import {AuthLayoutComponent} from './shared/auth-layout/auth-layout.component'
import { SignupComponent } from './signup/signup.component';
export const AppRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
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
  {
    path: 'signup', component: SignupComponent
  }
];
