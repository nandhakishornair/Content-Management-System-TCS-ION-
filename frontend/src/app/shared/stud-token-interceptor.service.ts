import { Injectable ,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class StudTokenInterceptorService implements HttpInterceptor {

  constructor(private injector :Injector) { }
  intercept(req:any,nxt:any){
    let studAuthService = this.injector.get(UserService)
    let tokenizedReq =req.clone(
    {
      setHeaders:{
        Authorization:`Bearer ${studAuthService.getToken()}`
      }
    })
    return nxt.handle(tokenizedReq)

  }
}
