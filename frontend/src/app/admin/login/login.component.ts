import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service :AdminService) { }
  login={
    email:'',
    password:''
    }
  ngOnInit(): void {
    
  }
  hide = true;

  adminlogin(){
    this.service.adminLogin(this.login).subscribe((data)=>{
      console.log("subscribed data",data)
    })
  }
}
