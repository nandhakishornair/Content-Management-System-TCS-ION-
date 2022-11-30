import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { AdminService } from './admin.service';
import { SuperadminService } from './superadmin.service';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StudTokenInterceptorService } from './stud-token-interceptor.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule ,
    
  ],
  exports:[]
  
})
export class SharedModule { 
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [
        UserService,AdminService,SuperadminService,{
          provide:HTTP_INTERCEPTORS,
          useClass: StudTokenInterceptorService,
          multi:true
        }
      ],
    };
 }
}
