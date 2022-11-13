import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';

import{MatSelectModule}from '@angular/material/select'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule} from '@angular/material/sidenav'
import {MatTabsModule} from '@angular/material/tabs'
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { ManageAdminComponent } from './manage-admin/manage-admin.component';
import {MatTableModule} from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
 

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LatestpostsComponent } from './latestposts/latestposts.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { PostsComponent } from './posts/posts.component';
import { SinglePostComponent } from './single-post/single-post.component';

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    ManageAdminComponent,
    AdminDashboardComponent,
    LatestpostsComponent,
    ViewCategoryComponent,
    CreateCategoryComponent,
    PostsComponent,
    SinglePostComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatTableModule,
    MatChipsModule,
    MatExpansionModule
    
  ]
})
export class AdminModule { }
