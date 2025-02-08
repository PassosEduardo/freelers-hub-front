import { Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
    {
        path: 'log-in',
        component: LogInComponent
    },
    {
        path: '',
        redirectTo: 'log-in',
        pathMatch: 'full'
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    {
        path: '**',
        component: LogInComponent
    },
];
