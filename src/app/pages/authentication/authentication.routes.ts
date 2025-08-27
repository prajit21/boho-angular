import { Routes } from '@angular/router';

import { ForgotPassword } from './forgot-password/forgot-password';
import { LoginBgImage } from './login-bg-image/login-bg-image';
import { LoginSimple } from './login-simple/login-simple';
import { LoginSweetalert2 } from './login-sweetalert2/login-sweetalert2';
import { LoginTooltip } from './login-tooltip/login-tooltip';
import { LoginValidation } from './login-validation/login-validation';
import { LoginWithTwoImage } from './login-with-two-image/login-with-two-image';
import { Maintenance } from './maintenance/maintenance';
import { RegisterBgImage } from './register-bg-image/register-bg-image';
import { RegisterSimple } from './register-simple/register-simple';
import { RegisterWithTwoImage } from './register-with-two-image/register-with-two-image';
import { ResetPassword } from './reset-password/reset-password';
import { UnlockUser } from './unlock-user/unlock-user';

export default [
  {
    path: 'simple',
    component: LoginSimple,
  },
  {
    path: 'image-one',
    component: LoginBgImage,
  },
  {
    path: 'image-two',
    component: LoginWithTwoImage,
  },
  {
    path: 'validation',
    component: LoginValidation,
  },
  {
    path: 'tooltip',
    component: LoginTooltip,
  },
  {
    path: 'login-sweetalert',
    component: LoginSweetalert2,
  },
  {
    path: 'register-simple',
    component: RegisterSimple,
  },
  {
    path: 'register-image-one',
    component: RegisterBgImage,
  },
  {
    path: 'register-image-two',
    component: RegisterWithTwoImage,
  },
  {
    path: 'unlock-user',
    component: UnlockUser,
  },
  {
    path: 'forgot-password',
    component: ForgotPassword,
  },
  {
    path: 'reset-password',
    component: ResetPassword,
  },
  {
    path: 'maintenance',
    component: Maintenance,
  },
] as Routes;
