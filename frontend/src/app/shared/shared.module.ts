import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { AdminService } from './admin.service';
import { SuperadminService } from './superadmin.service';
import { HttpClientModule , HTTP_INTERCEPTORS ,HttpInterceptor} from '@angular/common/http';
// import { StudTokenInterceptorService } from './stud-token-interceptor.service';
import { UserTokenInterceptorService } from './user-token-interceptor.service';
import { AdminTokenInterceptorService } from './admin-token-interceptor.service';
import { SuperadminTokenInterceptorService } from './superadmin-token-interceptor.service';

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
          useClass: UserTokenInterceptorService,
          multi:true
        },
        {
          provide:HTTP_INTERCEPTORS,
          useClass: SuperadminTokenInterceptorService,
          multi:true
        },
        {
          provide:HTTP_INTERCEPTORS,
          useClass: AdminTokenInterceptorService,
          multi:true
        }
      ],
    };
 }
}
