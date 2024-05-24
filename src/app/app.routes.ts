import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import path from 'path';

export const routes: Routes = [
    // set default route
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent
    }

];
