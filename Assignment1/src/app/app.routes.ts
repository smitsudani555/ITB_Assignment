import { Routes } from '@angular/router';
import { LoginComponent } from './auth-user/login/login.component';
import { RegisterComponent } from './auth-user/register/register.component'
import { UserComponent } from './auth-user/user/user.component'
import { ForgetPasswordComponent } from './auth-user/forget-password/forget-password.component'


export const routes: Routes = [
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'register',
        component : RegisterComponent
    },
    {
        path : 'user',
        component : UserComponent
    },
    {
        path : 'forget-password',
        component : ForgetPasswordComponent
    },
];
