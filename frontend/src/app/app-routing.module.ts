import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserComponent } from './user/user.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLatestPostComponent } from './user-latest-post/user-latest-post.component';
import { UserEditPostComponent } from './user-edit-post/user-edit-post.component';
import { UserYourPostsComponent } from './user-your-posts/user-your-posts.component';
import { UserCreatePostComponent } from './user-create-post/user-create-post.component';
import { UserSinglPostComponent } from './user-singl-post/user-singl-post.component';
import { UserPostInCategoryComponent } from './user-post-in-category/user-post-in-category.component';
import { UserGuard } from './user.guard';
const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', component: UserloginComponent },
      { path: 'signup', component: UserSignupComponent },
      {
        path:'dashboard',
        canActivate:[ UserGuard] ,
        component: UserDashboardComponent,
        children: [
          { path: '', component: UserLatestPostComponent },
          { path: 'editPost', component: UserEditPostComponent },
          {path:'yourPosts',component:UserYourPostsComponent},
          {path:'createPost',component:UserCreatePostComponent},
          {path:'singlePost',component:UserSinglPostComponent},
          {path:'postInCategory',component:UserPostInCategoryComponent}
        ],
      },
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
