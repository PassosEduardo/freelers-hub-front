import { Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { authenticationGuard } from './components/commons/authentication.guard';

export const routes: Routes = [
    {
        path: 'log-in',
        component: LogInComponent
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [authenticationGuard]
    },
    {
        path: '',
        redirectTo: 'log-in',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: LogInComponent
    },
];
