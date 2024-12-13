  import { Routes } from '@angular/router';
  import {LoginComponent} from './login/login.component';
  import {NotFoundComponent} from './not-found/not-found.component';

  export const routes: Routes = [
    {
      path: 'admin',
      loadChildren: () =>
        import('./admin/admin.module').then((m) => m.AdminModule),
    },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotFoundComponent },
  ];

