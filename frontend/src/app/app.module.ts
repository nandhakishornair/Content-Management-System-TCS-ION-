import { NgModule } from '@angular/core';

import { BrowserModule ,HammerModule} from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule} from '@angular/material/sidenav'
import {MatTabsModule} from '@angular/material/tabs'
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { UserloginComponent } from './userlogin/userlogin.component';
import {MatCardModule}from '@angular/material/card';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserComponent } from './user/user.component';
import{MatSelectModule}from '@angular/material/select'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTooltipModule} from '@angular/material/tooltip';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLatestPostComponent } from './user-latest-post/user-latest-post.component';
import { UserEditPostComponent } from './user-edit-post/user-edit-post.component';
import { UserYourPostsComponent } from './user-your-posts/user-your-posts.component';
import { UserCreatePostComponent } from './user-create-post/user-create-post.component';
import { UserSinglPostComponent } from './user-singl-post/user-singl-post.component';
import { UserPostInCategoryComponent } from './user-post-in-category/user-post-in-category.component';


@NgModule({
  declarations: [
    AppComponent,
   FooterComponent,
   HeaderComponent,
   UserloginComponent,
   UserSignupComponent,
   UserComponent,
   UserDashboardComponent,
   UserLatestPostComponent,
   UserEditPostComponent,
   UserYourPostsComponent,
   UserCreatePostComponent,
   UserSinglPostComponent,
   UserPostInCategoryComponent,
  
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    HammerModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatChipsModule,
    MatStepperModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
