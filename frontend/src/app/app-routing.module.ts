import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserComponent } from './user/user.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'login', component: UserloginComponent },
      { path: 'signup', component: UserSignupComponent },
      { path: 'dashboard', component: UserDashboardComponent, 
      children: [] },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'superadmin',
    loadChildren: () =>
      import('./superadmin/superadmin.module').then((m) => m.SuperadminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
