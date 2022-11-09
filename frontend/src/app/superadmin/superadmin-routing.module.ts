import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManageAdminComponent } from './manage-admin/manage-admin.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
const routes: Routes = [{ path: '', component: LoginComponent },
{path:"manageadmin",component:ManageAdminComponent},
{path:"manageuser",component:ManageUserComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
