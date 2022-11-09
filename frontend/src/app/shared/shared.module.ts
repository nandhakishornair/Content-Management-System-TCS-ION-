import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { AdminService } from './admin.service';
import { SuperadminService } from './superadmin.service';
import { HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule 
  ],
  exports:[]
  
})
export class SharedModule { 
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [
        UserService,AdminService,SuperadminService
      ],
    };
 }
}
