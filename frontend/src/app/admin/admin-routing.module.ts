import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { LatestpostsComponent } from './latestposts/latestposts.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
const routes: Routes = [{ path: '', component: LoginComponent },
 {path:"dashboard",component:AdminDashboardComponent,children:[
    {path:"latest",component:LatestpostsComponent},
    {path:"viewCategory",component:ViewCategoryComponent},
    {path:"createCategory",component:CreateCategoryComponent}
    
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
