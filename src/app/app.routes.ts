import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CartasComponent } from './cartas/cartas.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cartas',
        component: CartasComponent
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
