import { Component, OnInit } from '@angular/core';
import { SuperadminService } from 'src/app/shared/superadmin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:SuperadminService) { }
  login={
    email:'',
    password:''
    }
  ngOnInit(): void {
  }
  hide = true;
  superadminlogin(){
    this.service.SupreadminLogin(this.login).subscribe((data)=>{
      console.log("the data from backend is :::",data)
    })
  }
}
