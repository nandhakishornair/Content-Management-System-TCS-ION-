import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageAdminComponent } from './manage-admin/manage-admin.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { SuperadminRoutingModule } from './superadmin-routing.module';

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
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    ManageAdminComponent,
    ManageUserComponent,
    SuperadminComponent,
    
  ],
  imports: [
    SuperadminRoutingModule,
    CommonModule,
    CommonModule,
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
    MatTableModule
  ]
})
export class SuperadminModule { }
