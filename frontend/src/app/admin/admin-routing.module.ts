import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManageAdminComponent } from './manage-admin/manage-admin.component';

const routes: Routes = [{ path: '', component: LoginComponent },
{path:"manage",component:ManageAdminComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
